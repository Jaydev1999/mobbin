import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replacePercent',
})
export class ReplacePercentPipe implements PipeTransform {
  transform(value: string): string {
    return value.toLowerCase().replace(/ /, '-');
  }
}
