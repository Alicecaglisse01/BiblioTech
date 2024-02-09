import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from './Entity/page';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private pagesUrl = 'api/pages';


  constructor(private http: HttpClient) {}

  getPagesByBookId(bookId: number): Observable<Page[]> {
    const url = `${this.pagesUrl}/?bookId=${bookId}`;
    return this.http.get<Page[]>(url);
  }

  createPage(page: Page): Observable<Page> {
    return this.http.post<Page>(this.pagesUrl, page);
  }

}
