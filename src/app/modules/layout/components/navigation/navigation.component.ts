import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';

const exact = { routerLinkActiveOptions: { exact: true } };

@Component({
	standalone: true,
	selector: 'navigation',
	templateUrl: './navigation.component.html',
	styleUrl: './navigation.component.scss',
	imports: [PanelMenuModule],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
	public readonly menu: MenuItem[] = [
		{ label: $localize`Головна`, routerLink: '/', icon: 'ri-home-5-line', ...exact },
		{ label: $localize`Календар`, routerLink: '/calendar', icon: 'ri-calendar-line' },
	];
}
