import {Venue} from "./venue";

export class EventDetails {
  public id: string = "";
  public name: string = "";
  public pictureUrls: string[] = [];
  public startDate: Date = new Date();
  public performers: string[] = [];
  public venues: Venue[] = [];
  public eventUrl: string = "";
  public properties: string = "";

  // TODO: Extrapolate object data into object classes
  constructor(json: any) {
    this.id = json.id;
    this.name = json.name;
    this.pictureUrls = json.images.map((photo: any) => photo.url);
    this.startDate = new Date(json.dates?.start?.localDate);
    this.performers = json._embedded?.attractions?.map((attraction: any) => attraction.name);
    if (json._embedded?.venues != undefined){
      this.venues = json._embedded?.venues.map((venue: any) => new Venue(venue));
    } else if (json.place != undefined) {
      this.venues = [new Venue(json.place)];
    }
    this.eventUrl = json.url;
    this.properties = JSON.stringify(json);
  }
}
