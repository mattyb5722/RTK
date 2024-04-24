import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {EventListComponent} from "./event-list.component";
import {EventDetailsComponent} from "../event-details/event-details.component";
import {FilterBarComponent} from "../filter-bar/filter-bar.component";
import {SearchBarComponent} from "../search-bar/search-bar.component";
import {MaterialModule} from "../material.module";
import {FilterBarPipe} from "../filter-bar/filter-bar-pipe";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {DateComponent} from "../date/date.component";

@NgModule({
  declarations: [
    EventListComponent,
    EventDetailsComponent,
    FilterBarComponent,
    FilterBarPipe,
    SearchBarComponent
  ],
  exports: [ EventListComponent ],
  imports: [
    MaterialModule,
    CommonModule,
    DateComponent,
    NgOptimizedImage,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EventListModule { }
