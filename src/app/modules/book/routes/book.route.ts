import { Route } from '@shared/route/route';

export abstract class BookRoute extends Route {
	public static readonly Main = '/book';

	public static readonly View = (id: number): string => Route.buildURL(BookRoute.Main, id);
}
