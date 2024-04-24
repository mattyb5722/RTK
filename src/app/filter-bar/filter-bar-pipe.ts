import { Pipe, PipeTransform } from '@angular/core';
import {FilterParameters} from "../models/filter-parameters";

@Pipe({
  name: 'filterBarPipe',
  pure: false
})
export class FilterBarPipe<T> implements PipeTransform {
  transform(items: T[], filterParams: FilterParameters<T>): T[] {
    if (!items || !filterParams) {
      return items;
    }
    return items.filter((item: T): boolean => String(item[filterParams.attribute]).includes(String(filterParams.value)));
  }
}
