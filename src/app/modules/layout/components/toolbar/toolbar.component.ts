import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
	standalone: true,
	selector: 'toolbar',
	templateUrl: './toolbar.component.html',
	styleUrl: './toolbar.component.scss',
	imports: [ToolbarModule, SharedModule, ButtonModule],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {}
