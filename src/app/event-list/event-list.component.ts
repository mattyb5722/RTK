import {Component} from '@angular/core';
import {EventApis} from "../transformers/event-apis/event-apis";
import {SearchParams} from "../models/search-parameters";
import {EventDetails} from "../models/event-details";
import {Pagination} from "../models/pagination";
import {PageEvent} from "@angular/material/paginator";
import {FilterParameters} from "../models/filter-parameters";
import {DropdownOption} from "../models/dropdown-option";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {

  protected events: EventDetails[] = [];
  private searchParams: SearchParams | undefined = undefined;
  protected filterParams: FilterParameters<EventDetails> | undefined;
  protected filterOptions: DropdownOption[] = [
    new DropdownOption("properties", "All Aspects"),
    new DropdownOption("name", "Event Name"),
    new DropdownOption("performers", "Performers")
  ];

  protected length: number = 0;
  protected pageSize: number = 20;
  protected pageIndex: number = 0;
  protected readonly pageSizeOptions: number[] = [5, 10, 20, 50];

  constructor(private eventApis: EventApis) {
  }

  search(searchParams?: SearchParams): void {
    if (searchParams) {
      this.searchParams = searchParams;
      this.pageIndex = 0;
    }

    if (this.searchParams == undefined) { return }

    this.eventApis.eventSearch(this.searchParams, this.pageSize, this.pageIndex)
      .subscribe((eventDetailsPaginated: Pagination<EventDetails>) => {
        this.events = eventDetailsPaginated.items;
        this.length = eventDetailsPaginated.totalElements;
        this.pageSize = eventDetailsPaginated.size;
        this.pageIndex = eventDetailsPaginated.number
      }
    );
  }

  handlePageEvent(e: PageEvent): void {
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    this.search();
  }
}
