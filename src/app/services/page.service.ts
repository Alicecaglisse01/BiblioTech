import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from './Entity/page';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private pagesUrl = 'api/pages'; // URL to web API for pages

  constructor(private http: HttpClient) {}

  // Get pages by bookId
  getPagesByBookId(bookId: number): Observable<Page[]> {
    const url = `${this.pagesUrl}/?bookId=${bookId}`;
    return this.http.get<Page[]>(url);
  }

  // Other methods as needed...
}
