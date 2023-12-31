import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutComponent } from './modules/layout/components/layout/layout.component';

@Component({
	standalone: true,
	selector: 'root',
	imports: [LayoutComponent],
	template: `
		<layout></layout>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
