import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';
import { uk } from 'date-fns/locale';

@Pipe({ name: 'dateFormat', standalone: true })
export class DateFormatPipe implements PipeTransform {
	public transform(date: Date | DateString | null): string {
		if (!date) {
			return '';
		}

		return format(date, 'dd MMM yyyy', { locale: uk });
	}
}
