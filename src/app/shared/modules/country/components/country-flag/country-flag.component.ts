import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LowerCasePipe } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { Country } from '../../types/country.enum';
import { countryI18n } from '../../i18n/country.i18n';

@Component({
	standalone: true,
	selector: 'country-flag',
	template: `
		<span [pTooltip]="countryI18n[country]" tooltipPosition="top" [class]="'fi fi-' + country | lowercase"></span>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [TooltipModule, LowerCasePipe],
})
export class CountryFlagComponent {
	@Input({ required: true }) public country!: Country;

	public readonly countryI18n = countryI18n;
}
