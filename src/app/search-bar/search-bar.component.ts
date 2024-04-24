import {Component, EventEmitter, Output} from '@angular/core';
import {SearchParams} from "../models/search-parameters";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  @Output() searchEmitter: EventEmitter<SearchParams> = new EventEmitter<SearchParams>();

  protected search(eventName: string): void {
    const searchParams: SearchParams = new SearchParams(eventName)
    this.searchEmitter.emit(searchParams);
  }
}
