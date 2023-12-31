import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
	standalone: true,
	selector: 'sidebar',
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.scss',
	imports: [RouterLink, NavigationComponent],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {}
