import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { MenuItem, SortEvent } from 'primeng/api';

import { BookSortService } from '../../services/book-sort/book-sort.service';

import { CountryFlagComponent } from '@shared/modules/country/components/country-flag/country-flag.component';
import { BookAvatarComponent } from '../book-avatar/book-avatar.component';
import { BookTypeMarkComponent } from '../book-type-mark/book-type-mark.component';

import { DateDiffPipe } from '@shared/modules/date/pipes/date-diff.pipe';
import { DateFormatPipe } from '@shared/modules/date/pipes/date-format.pipe';

import { Book } from '../../types/book';
import { BookRoute } from '../../routes/book.route';

import { books } from '../../../../data/books.data';

@Component({
	standalone: true,
	selector: 'book-list',
	templateUrl: './book-list.component.html',
	styleUrl: './book-list.component.scss',
	imports: [
		TableModule,
		RatingModule,
		FormsModule,
		MenuModule,
		ButtonModule,
		CountryFlagComponent,
		BookAvatarComponent,
		BookTypeMarkComponent,
		DateDiffPipe,
		DateFormatPipe,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookListComponent {
	@Input({ required: true }) public books: Book[] = [];
	public readonly _books = books;

	public readonly BookRoute = BookRoute;

	public readonly actions: MenuItem[] = [{ id: 'view' }, { id: 'edit' }, { id: 'delete' }];

	constructor(private bookSortService: BookSortService) {}

	public onEditClick(book: Book): void {
		console.log(book);
	}

	public onDeleteClick(book: Book): void {
		console.log(book);
	}

	public getType(book: unknown): Book {
		return book as Book;
	}

	public customSort(event: SortEvent): void {
		return this.bookSortService.sort(event);
	}
}
