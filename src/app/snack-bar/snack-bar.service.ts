import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackBarComponent} from "./snack-bar.component";
import {Injectable} from "@angular/core";
import {SnackBarData} from "./snack-bar-data";

@Injectable()
export class SnackBarService {
  durationInSeconds: number = 5;

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(data: SnackBarData): void {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      data: data
    });
  }
}
