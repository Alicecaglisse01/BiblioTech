import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Book {
  id: number;
  title: string;
  resume: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  categoryId: number;
  authorId: number;
}

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private booksUrl = 'api/book';  // URL de l'API web

  constructor(private http: HttpClient) { }

  // Récupérer tous les livres
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }

  // Récupérer un livre spécifique par son ID
  getBook(id: number): Observable<Book> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.get<Book>(url);
  }

  // Ajouter un nouveau livre
  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.booksUrl, book);
  }

  // Mettre à jour un livre
  updateBook(book: Book): Observable<any> {
    return this.http.put(`${this.booksUrl}/${book.id}`, book);
  }

  // Supprimer un livre
  deleteBook(id: number): Observable<Book> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.delete<Book>(url);
  }
}
