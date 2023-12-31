import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { CardModule } from 'primeng/card';

import { Book } from '../../../book/types/book';
import { BookApi } from '../../../book/api/book.api';
import { BookListComponent } from '../../../book/components/book-list/book-list.component';

@Component({
	standalone: true,
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
	imports: [BookListComponent, CardModule],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
	public books = signal<Book[]>([]);

	private bookApi = inject(BookApi);

	public ngOnInit(): void {
		// const search = `Джо Аберкромбі`;
		console.log(this.bookApi);
		// this.bookApi.search(search).then(books => this.books.set(books as Book[]));
	}
}
