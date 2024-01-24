import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns';

@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {

  transform(dateString: string): string {
    const date = new Date(dateString);
    const today = new Date();
    return formatDistance(today, date);
  }

}
