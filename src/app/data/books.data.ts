import { Book } from '../modules/book/types/book';
import { Country } from '@shared/modules/country/types/country.enum';
import { BookType } from '../modules/book/types/book-type';

export const books: Book[] = [
	{
		id: 1,
		name: 'Позолочена рибка',
		authors: ['Барбара Космовська'],
		country: Country.Poland,
		pages: 176,
		genre: ['Підліткова проза', 'Повість'],
		type: BookType.Ebook,
		thumbnail: 'https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/3/4/341885_66318086.jpg',
		bookYear: 2012,
		userExtra: {
			rating: 4.5,
			progress: { startDate: '12/30/2022' as DateString, endDate: '01/02/2023' as DateString },
		},
	},

	{
		id: 2,
		name: 'Гаррі Поттер і Філософський камінь',
		authors: ['Джоан Роулінг'],
		country: Country.UnitedKingdom,
		pages: 320,
		genre: ['Фентезі'],
		type: BookType.Ebook,
		thumbnail:
			'https://noosfera.biz/files/shop_products/1170/img/garri-potter-i-filosofskyj-kamin-velyke-ilyustrovane-vydannya.jpeg',
		bookYear: 1997,
		userExtra: {
			rating: 5,
			progress: { startDate: '01/03/2023' as DateString, endDate: '01/05/2023' as DateString },
		},
	},
];
