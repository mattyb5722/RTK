import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {debounceTime, distinctUntilChanged, Observable, Subject, Subscription} from "rxjs";
import {FilterParameters} from "../models/filter-parameters";
import {DropdownOption} from "../models/dropdown-option";

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css'
})
export class FilterBarComponent<T> implements OnInit, OnDestroy {

  @Input() filterOptions: DropdownOption[] = [];
  selectedFilterOption: string = "";
  @Output() filterEmitter: EventEmitter<FilterParameters<T>> = new EventEmitter<FilterParameters<T>>();

  inputValue: Subject<T[keyof T]> = new Subject<T[keyof T]>();
  trigger: Observable<T[keyof T]> = this.inputValue.pipe(
    debounceTime(300),
    distinctUntilChanged()
  );

  subscriptions: Subscription[] = [];

  constructor() {
  }

  ngOnInit(): void {
    if (this.filterOptions.length > 0) {
      this.selectedFilterOption = this.filterOptions[0].value;
    }

    const subscription: Subscription = this.trigger.subscribe((value: T[keyof T]) => {
      this.filterEmitter.emit(new FilterParameters<T>(this.selectedFilterOption as keyof T, value));
    });
    this.subscriptions.push(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  filter(value: string): void {
    this.inputValue.next(value as T[keyof T]);
  }
}
