import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { UserService } from '../../services/user.service'; // Importez UserService
import { Book } from '../../services/Entity/book';
import { User } from '../../services/Entity/user'; // Assurez-vous d'importer User
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../../services/Entity/category';
import { CategoryService } from '../../services/category.service';

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
  categories: Category[] = []; // Nouveau


  constructor(private bookService: BookService, private userService: UserService, private router: Router,    private categoryService: CategoryService, // Nouveau
  ) {} // UserService ajouté au constructor

  ngOnInit() {
    this.getBooksAuthorsAndCategories();
  }

  getBooksAuthorsAndCategories(): void {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
      this.userService.getAllUsers().subscribe(users => {
        this.users = users;
        this.bookService.getAllBooks().subscribe(books => {
          this.books = books.map(book => {
            const author = this.users.find(user => user.id === book.authorId);
            const category = this.categories.find(cat => cat.id === book.categoryId);
            return {
              ...book,
              authorName: author ? `${author.firstname} ${author.lastname}` : 'Auteur inconnu', // Ajoute le nom complet de l'auteur
              categoryName: category ? category.label : 'Catégorie inconnue' // Ajoute le label de la catégorie
            };
          });
        }, error => {
          console.error('There was an error!', error);
        });
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
      this.getBooksAuthorsAndCategories(); // Mettez à jour pour réafficher tous les livres avec les auteurs si la recherche est effacée
    }
  }
  logout() {
    localStorage.removeItem('user'); // Efface les informations de l'utilisateur connecté
    this.router.navigate(['/connexion']); // Redirige vers la page de connexion
  }

  goToBookDetail(bookId: number) {
    this.router.navigate(['/book', bookId]);
  }

  goContributionsPage(){
    this.router.navigate(['/contributions'])
  }
  goProfilPage(){
    this.router.navigate(['/profil'])
  }
  goBooksPage(){
    this.router.navigate(['/books'])
  }
}
