export type SelectOptionKey = string | number | boolean;

/** Option that being used in select | multi checkboxes | radio buttons add other form elements */
export interface SelectOption<T = SelectOptionKey> {
	key: T;
	value: string;
}
