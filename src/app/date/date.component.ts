import {Component, Input} from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  standalone: true,
  imports: [
    DatePipe
  ],
  styleUrl: './date.component.css'
})
export class DateComponent {
  @Input() date!: Date;
}
