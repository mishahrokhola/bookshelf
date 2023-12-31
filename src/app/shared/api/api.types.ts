import { Language } from '../../global/language.enum';

export type ApiResp = {
	items: ApiBook[];
	kind: 'books#volumes';
	totalItems: number;
};

export type ApiBook = {
	accessInfo: ApiAccessInfo;
	etag: string;
	id: string;
	kind: 'books#volumes';
	saleInfo: ApiSaleInfo;
	searchInfo: ApiSearchInfo;
	selfLink: string;
	volumeInfo: ApiBookInfo;
};

export type ApiBookInfo = {
	authors: string[];
	averageRating?: number;
	canonicalVolumeLink: string;
	categories?: string[];
	contentVersion: string;
	description: string;
	imageLinks: ApiBookImageLinks;
	industryIdentifiers: ApiIndustryIdentifier[];
	infoLink: string;
	language: Language;
	pageCount: number;
	previewLink: string;
	printType: 'BOOK' | 'MAGAZINE';
	publishedDate: string;
	publisher: string;
	ratingsCount: number;
	readingModes: ApiReadingModes;
	subtitle: string;
	title: string;
};

export type ApiBookImageLinks = {
	large?: string;
	medium?: string;
	small?: string;
	smallThumbnail: string;
	thumbnail: string;
};

export type ApiIndustryIdentifier = {
	identifier: string;
	type: string;
};

export type ApiReadingModes = {
	image: boolean;
	text: boolean;
};

export type ApiSaleInfo = {
	buyLink?: string;
	country: string;
	isEbook: boolean;
	listPrice?: { amount: number; currencyCode: string };
	offers?: ApiSaleOffer[];
	retailPrice?: { amount: number; currencyCode: string };
	saleability: string;
};

export type ApiSaleOffer = {
	finskyOfferType: number;
	listPrice: {
		amountInMicros: number;
		currencyCode: string;
	};
	retailPrice: {
		amountInMicros: number;
		currencyCode: string;
	};
};

export type ApiEpubInfo = {
	acsTokenLink?: string;
	isAvailable: boolean;
};

export type ApiPdfInfo = {
	acsTokenLink?: string;
	isAvailable: boolean;
};

export type ApiAccessInfo = {
	accessViewStatus: string;
	country: string;
	embeddable: boolean;
	epub: ApiEpubInfo;
	pdf: ApiPdfInfo;
	publicDomain: boolean;
	quoteSharingAllowed: boolean;
	textToSpeechPermission: string;
	viewability: string;
	webReaderLink: string;
};

export type ApiSearchInfo = {
	textSnippet: string;
};
