import { Pipe, PipeTransform } from '@angular/core';

export interface Country {
  name: string;
  code:  string;
}

@Pipe({
  name: 'test',
  pure: true
})
export class TestPipe implements PipeTransform {
  transform(value: Country): string {
    return `${value.name} (${value.code})`;
  }
}
