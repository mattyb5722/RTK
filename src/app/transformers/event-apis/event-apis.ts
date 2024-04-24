import {Injectable} from "@angular/core";
import {catchError, map, Observable, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {API_KEY, TICKET_MASTER_BASE_URL} from "../api-constants";
import {EventDetails} from "../../models/event-details";
import {Pagination} from "../../models/pagination";
import {SearchParams} from "../../models/search-parameters";
import {SnackBarService} from "../../snack-bar/snack-bar.service";
import {SnackBarData} from "../../snack-bar/snack-bar-data";

@Injectable()
export class EventApis {

  constructor(private http: HttpClient, private snackBarService: SnackBarService) {
  }

  eventSearch(searchParams: SearchParams, pageSize: number, pageIndex: number): Observable<Pagination<EventDetails>> {
    const url: string = `${TICKET_MASTER_BASE_URL}/discovery/v2/events.json?keyword=${searchParams.keyword}&size=${pageSize}&page=${pageIndex}&apikey=${API_KEY}`

    return this.http.get(url)
      .pipe(
        map((o: any) => {
          // TODO: Migrate Code to Converter
          const items: EventDetails[] = o._embedded.events.map((eventDetailsJson: any) => new EventDetails(eventDetailsJson));
          return new Pagination<EventDetails>(items, o.page);
        }),
        catchError((error: HttpErrorResponse) => {
          this.snackBarService.openSnackBar(new SnackBarData("Unable to Retrieve Events", true));
          return throwError(() => error);
        })
      )
  }
}
