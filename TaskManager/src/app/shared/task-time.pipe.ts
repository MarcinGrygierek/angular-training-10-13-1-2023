import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskTime'
})
export class TaskTimePipe implements PipeTransform {

  transform(value: number | null): unknown {
    const normalizedValue = value || 0;
    const seconds = (normalizedValue % 60).toString().padStart(2, '0');
    const minutes = Math.floor(normalizedValue / 60).toString().padStart(2, '0');

    return `${minutes}:${seconds}`;
  }

}
