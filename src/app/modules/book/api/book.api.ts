import { inject, Injectable } from '@angular/core';
import { Book } from '../types/book';
import { BookAdapter } from '../adapters/book.adapter';
import { GoogleBookApi } from '../../../shared/api/google-book.api';

@Injectable({
	providedIn: 'root',
})
export class BookApi {
	private googleBookApi = inject(GoogleBookApi);
	private bookAdapter = inject(BookAdapter);

	public async search(search: string): Promise<Array<Partial<Book>>> {
		const resp = await this.googleBookApi.search(search);

		return resp.items.map(item => this.bookAdapter.transform(item));
	}
}
