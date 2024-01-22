import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {

  transform(dateString: string): string {
    const now: Date = new Date();
    const timeDifferenceMilliseconds: number = now.getTime() - Date.parse(dateString);
    const secondsElapsed: number = Math.round(timeDifferenceMilliseconds / 1000);
    const minutesElapsed: number = Math.round(secondsElapsed / 60);
    const hoursElapsed: number = Math.round(minutesElapsed / 60);
    const daysElapsed: number = Math.round(hoursElapsed / 24);
    const monthsElapsed: number = Math.round(daysElapsed / 30);

    if (minutesElapsed < 60) {
        return `${minutesElapsed} minutes ago`;
    } else if (hoursElapsed < 24) {
        return `${hoursElapsed} hours ago`;
    } else if (daysElapsed < 30) {
        return `${daysElapsed} days ago`;
    } else {
        return `${monthsElapsed} months ago`;
    }
  }

}
