import { Routes } from '@angular/router';

import { HomeComponent } from './modules/home/pages/home/home.component';
import { CalendarComponent } from './modules/calendar/pages/calendar/calendar.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'calendar', component: CalendarComponent },
];
