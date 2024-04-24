export class Venue {
  public name: string | undefined;
  public city: string = "";
  public countryCode: string = "";

  constructor(json: any) {
    this.name = json.name;
    this.city = json.city.name;
    this.countryCode = json.country.countryCode;
  }

  public toString = () : string => {
    if (this.name != undefined) {
      return `${this.city}, ${this.countryCode}`
    }
    return `${this.name}, ${this.city}, ${this.countryCode}`
  }
}
