export class Pagination<T> {
  public items: T[] = [];
  public number: number = 0;
  public size: number = 0;
  public totalElements: number = 0;
  public totalPages: number = 0;

  constructor(items: T[], pageJson: any) {
    this.items = items;
    this.number = pageJson.number;
    this.size = pageJson.size;
    this.totalElements = pageJson.totalElements;
    this.totalPages = pageJson.totalPages;
  }

  public isLastPage(): boolean {
    return this.number >= this.totalPages;
  }
}
