import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'rot', pure: true})
export class RotPipe implements PipeTransform {
  transform(value: string, args?: any): string {
    if (!value) {
      return value;
    }
    return value.replace(/[a-z]/ig, (c: string) => {
      return String.fromCharCode(c.charCodeAt(0) + (c.toUpperCase() <= 'M' ? 13 : -13));
    });
  }
}
