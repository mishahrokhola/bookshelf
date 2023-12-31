import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
	standalone: true,
	selector: 'layout',
	templateUrl: './layout.component.html',
	styleUrl: './layout.component.scss',
	imports: [RouterOutlet, ToolbarComponent, SidebarComponent],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {}
