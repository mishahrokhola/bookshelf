import { Country } from '@shared/modules/country/types/country.enum';
import { BookType } from './book-type';

export type Book = {
	authors: string[];
	averageRating?: number; // 1.0 <=> 5.0
	bookYear: number;
	country: Country;
	description?: string;
	genre: string[];
	id: number;
	name: string;
	pages: number;
	thumbnail?: string;
	type: BookType;
	userExtra?: BookUserExtra;
};

export type BookUserExtra = {
	plot?: string[];
	progress?: BookProgress;
	quotes?: string[];
	rating?: number; // 1.0 <=> 5.0
};

export type BookProgress = {
	endDate?: DateString;
	startDate: DateString;
};
