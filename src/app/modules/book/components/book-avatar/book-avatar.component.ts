import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { Book } from '../../types/book';

@Component({
	standalone: true,
	selector: 'book-avatar',
	template: `
		@if (book.thumbnail) {
			<p-avatar [title]="book.name" [image]="book.thumbnail" [size]="size" [shape]="shape"></p-avatar>
		} @else {
			<p-avatar [title]="book.name" icon="ri-book-line" [size]="size" [shape]="shape"></p-avatar>
		}
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [AvatarModule],
})
export class BookAvatarComponent {
	@Input({ required: true }) public book!: Book;

	@Input() size?: 'normal' | 'large' | 'xlarge' = 'large';
	@Input() shape?: 'square' | 'circle' = 'circle';
}
