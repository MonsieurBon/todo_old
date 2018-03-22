import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform<T>(value: Array<T>, property: string, filter: any): Array<T> {
    if (value && value.length > 0) {
      return value.filter(element => element[ property ] === filter);
    }

    return value;
  }

}
