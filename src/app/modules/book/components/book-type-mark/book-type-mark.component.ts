import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BookType } from '../../types/book-type';
import { TooltipModule } from 'primeng/tooltip';

@Component({
	standalone: true,
	selector: 'book-type-mark',
	template: `
		@if (icon) {
			<span [pTooltip]="tooltip" tooltipPosition="top">
				<i [class]="icon"></i>
			</span>
		}
	`,
	styleUrl: './book-type-mark.component.scss',
	imports: [TooltipModule],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookTypeMarkComponent {
	@Input({ required: true }) public type!: BookType;

	public get tooltip(): string {
		switch (this.type) {
			case BookType.Ebook:
				return 'E-Book';
			case BookType.Audio:
				return 'Audio';
			default:
				return '';
		}
	}

	public get icon(): string {
		switch (this.type) {
			case BookType.Ebook:
				return 'ri-lightbulb-line';
			case BookType.Audio:
				return 'ri-voiceprint-line';
			default:
				return '';
		}
	}
}
