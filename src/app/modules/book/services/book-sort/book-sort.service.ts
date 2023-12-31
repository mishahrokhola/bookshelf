import { Injectable } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { BookProgress, BookUserExtra } from '../../types/book';

@Injectable({
	providedIn: 'root',
})
export class BookSortService {
	public sort(event: SortEvent): void {
		event.data!.sort((data1, data2) => {
			let value1 = data1[event.field!];
			let value2 = data2[event.field!];
			let result = null;

			if (value1 == null && value2 != null) result = -1;
			else if (value1 != null && value2 == null) result = 1;
			else if (value1 == null && value2 == null) result = 0;
			else if (typeof value1 === 'string' && typeof value2 === 'string') result = this.sortString(value1, value2);
			else result = this.sortNumbers(value1, value2);

			if (event.field === 'author') result = this.sortString(data1.authors[0], data2.authors[0]);
			if (event.field === 'date') result = this.sortDate(data1.userExtra.progress, data2.userExtra.progress);
			if (event.field === 'rating') result = this.sortRating(data1.userExtra, data2.userExtra);

			return event.order! * result;
		});
	}

	private sortDate(progress1: BookProgress | null, progress2: BookProgress | null): -1 | 0 | 1 {
		const sortNull = this.sortNull(progress1, progress2);
		if (sortNull !== 'non-null') return sortNull;

		const time1 = +new Date(progress1!.endDate!) - +new Date(progress1!.startDate);
		const time2 = +new Date(progress2!.endDate!) - +new Date(progress2!.startDate);

		return this.sortNumbers(time1, time2);
	}

	private sortRating(userExtra1: BookUserExtra | null, userExtra2: BookUserExtra | null): -1 | 0 | 1 {
		const sortNull = this.sortNull(userExtra1, userExtra2);
		if (sortNull !== 'non-null') return sortNull;

		return this.sortNumbers(userExtra1!.rating!, userExtra2!.rating!);
	}

	private sortNumbers(num1: number, num2: number): -1 | 0 | 1 {
		return num1 < num2 ? -1 : num1 > num2 ? 1 : 0;
	}

	private sortString(value1: string, value2: string): -1 | 0 | 1 {
		return value1.localeCompare(value2) as -1 | 0 | 1;
	}

	private sortNull(data1: unknown, data2: unknown): -1 | 0 | 1 | 'non-null' {
		if (data1 == null && data2 != null) return -1;
		else if (data1 != null && data2 == null) return 1;
		else if (data1 == null && data2 == null) return 0;

		return 'non-null';
	}
}
