import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'calendar',
	standalone: true,
	imports: [],
	templateUrl: './calendar.component.html',
	styleUrl: './calendar.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent {}
