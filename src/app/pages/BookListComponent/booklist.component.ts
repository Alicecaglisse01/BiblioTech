import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { UserService } from '../../services/user.service'; // Importez UserService
import { Book } from '../../services/Entity/book';
import { User } from '../../services/Entity/user'; // Assurez-vous d'importer User
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BookListComponent implements OnInit {
  books: any[] = []; // Type modifié pour accueillir les informations supplémentaires de l'auteur
  searchText: string = '';
  users: User[] = []; // Ajouté pour stocker les utilisateurs

  constructor(private bookService: BookService, private userService: UserService, private router: Router,) {} // UserService ajouté au constructor

  ngOnInit() {
    this.getBooksAndAuthors();
  }

  getBooksAndAuthors(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
      this.bookService.getAllBooks().subscribe(books => {
        this.books = books.map(book => {
          const author = this.users.find(user => user.id === book.authorId);
          return {
            ...book,
            authorName: author ? `${author.firstname} ${author.lastname}` : 'Auteur inconnu' // Ajoute le nom complet de l'auteur
          };
        });
      }, error => {
        console.error('There was an error!', error);
      });
    });
  }

  // Méthode pour appeler la recherche dans le service
  searchBooks(): void {
    if (this.searchText) {
      this.bookService.searchBooksByTitle(this.searchText)
        .subscribe((data: Book[]) => {
          // Mise à jour pour inclure le nom de l'auteur dans les résultats de recherche
          this.books = data.map(book => {
            const author = this.users.find(user => user.id === book.authorId);
            return {
              ...book,
              authorName: author ? `${author.firstname} ${author.lastname}` : 'Auteur inconnu'
            };
          });
        }, error => {
          console.error('There was an error!', error);
        });
    } else {
      this.getBooksAndAuthors(); // Mettez à jour pour réafficher tous les livres avec les auteurs si la recherche est effacée
    }
  }
  logout(): void {
    // Redirige l'utilisateur vers la page de connexion
    this.router.navigate(['/connexion']);
    // Ici, vous pouvez également ajouter une logique pour effacer toutes les données d'authentification stockées
  }
  goToBookDetail(bookId: number) {
    this.router.navigate(['/book', bookId]);
  }
}
