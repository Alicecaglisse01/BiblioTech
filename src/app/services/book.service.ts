import { Injectable, NgModule } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';
import { Book } from './Entity/book'; // Assurez-vous d'ajuster le chemin d'importation selon votre structure de projet
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class BookService {
  private booksUrl = 'api/books'; // URL de l'API pour les livres

  constructor(private http: HttpClient) {}

  // Récupérer tous les livres
  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }

  // Récupérer un livre par son ID
  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.booksUrl}/${id}`);
  }

  // Créer un nouveau livre
  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.booksUrl, book);
  }

  // Modifier un livre
  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.booksUrl}/${book.id}`, book);
  }

  // Supprimer un livre
  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(`${this.booksUrl}/${id}`);
  }

  searchBooksByTitle(searchTerm: string): Observable<Book[]> {
    return this.getAllBooks().pipe(
      map(books => books.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase())))
    );
  }

  // Dans book.service.ts
getBooksByAuthor(authorId: number): Observable<Book[]> {
  return this.http.get<Book[]>(this.booksUrl).pipe(
    map(books => books.filter(book => book.authorId === authorId))
  );
}




  // Méthodes supplémentaires pour trier et filtrer les livres peuvent être ajoutées ici
}
