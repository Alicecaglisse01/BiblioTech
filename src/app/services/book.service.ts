import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
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

  // Méthodes supplémentaires pour trier et filtrer les livres peuvent être ajoutées ici
}
