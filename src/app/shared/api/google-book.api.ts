import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResp } from './api.types';
import { firstValueFrom } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class GoogleBookApi {
	private httpClient = inject(HttpClient);

	public search(search: string): Promise<ApiResp> {
		return firstValueFrom(
			this.httpClient.get<ApiResp>('https://www.googleapis.com/books/v1/volumes', {
				params: { q: search, langRestrict: 'uk' },
			})
		);
	}
}
