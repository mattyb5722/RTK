import {Component, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from "@angular/material/snack-bar";
import {MaterialModule} from "../material.module";
import {SnackBarData} from "./snack-bar-data";

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  standalone: true,
  imports: [
    MaterialModule
  ],
  styleUrl: './snack-bar.component.css'
})
export class SnackBarComponent {
  constructor(protected snackBarRef: MatSnackBarRef<any>, @Inject(MAT_SNACK_BAR_DATA) public data: SnackBarData) {
  }
}
