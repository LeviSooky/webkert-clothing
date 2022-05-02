import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forint'
})
export class ForintPipe implements PipeTransform {

  transform(value: number): string {
    return value + ".00 Ft";
  }

}
