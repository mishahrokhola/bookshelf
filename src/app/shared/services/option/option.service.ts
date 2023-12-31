import { Injectable } from '@angular/core';
import { SelectOption } from '../../types/select-option.interface';

@Injectable({
	providedIn: 'root',
})
export class OptionService {
	public transform<Key extends string | number = string | number>(
		value: Record<Key, string>
	): Array<SelectOption<Key>> {
		return Object.entries<string>(value).map(([key, value]) => {
			const _key = !isNaN(+key) ? +key : key;
			return { key: _key as Key, value };
		});
	}
}
