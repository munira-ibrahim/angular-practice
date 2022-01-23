import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode'
})
export class CountryCodePipe implements PipeTransform {

  countryCode : Array<number> = [93,355,213,91,672,43,54,61,32,1-264];
  transform(value: Array<number>): unknown {

    return this.countryCode;
  }

}
