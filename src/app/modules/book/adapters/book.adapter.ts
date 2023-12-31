import { Injectable } from '@angular/core';

import { Book } from '../types/book';
import { BookType } from '../types/book-type';
import { ApiBook, ApiBookImageLinks } from '../../../shared/api/api.types';

@Injectable({
	providedIn: 'root',
})
export class BookAdapter {
	public transform({ volumeInfo, saleInfo }: ApiBook): Partial<Book> {
		return {
			id: Math.random(),
			authors: volumeInfo.authors.flatMap(author => author.split(', ')),
			name: volumeInfo.title,
			description: volumeInfo.description,
			type: saleInfo.isEbook ? BookType.Ebook : BookType.Paper,
			genre: volumeInfo.categories || [],
			averageRating: volumeInfo.averageRating,
			thumbnail: this.getThumbnail(volumeInfo.imageLinks),
			pages: volumeInfo.pageCount,
		};
	}

	private getThumbnail(imageLinks: ApiBookImageLinks): string | undefined {
		return imageLinks.medium || imageLinks.small || imageLinks.thumbnail;
	}
}
