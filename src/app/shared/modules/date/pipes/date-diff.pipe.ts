import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns';
import { uk } from 'date-fns/locale';

@Pipe({ name: 'dateDiff', standalone: true })
export class DateDiffPipe implements PipeTransform {
	public transform(date: Date | DateString, dateToCompare: Date | DateString = new Date()): string {
		return formatDistance(date, dateToCompare, { locale: uk });
	}
}
