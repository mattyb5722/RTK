import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {EventApis} from "./transformers/event-apis/event-apis";
import {EventListModule} from "./event-list/event-list.module";
import {SnackBarService} from "./snack-bar/snack-bar.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [
    EventListModule,
    RouterOutlet,
  ],
  providers: [EventApis, SnackBarService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppComponent {
}
