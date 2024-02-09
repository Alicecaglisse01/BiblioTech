// Dans mes-contributions.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../services/Entity/book';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../services/Entity/category';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mes-contributions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mes-contributions.component.html',
  styleUrls: ['./mes-contributions.component.css']
})
// Dans mes-contributions.component.ts

export class MesContributionsComponent implements OnInit {
  myBooks: Book[] = [];
  showForm: boolean = false;
  categories: Category[] = [];

  newBook: Partial<Book> = {
    title: '',
    resume: '',
    image: '', // Vous pouvez initialiser ceci avec une valeur par défaut ou laisser l'utilisateur la saisir
    categoryId: 0, // Initialisez avec une valeur par défaut ou sélectionnez par l'utilisateur
  };


  constructor(
    private router: Router,
    private bookService: BookService,
    private categoryService: CategoryService
  ) {}


  getCategoryName(categoryId: number): string {
    const category = this.categories.find(cat => cat.id === categoryId);
    return category ? category.label : 'Catégorie inconnue';
  }

  deleteBook(bookId: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce livre ?')) {
      this.bookService.deleteBook(bookId).subscribe({
        next: () => {
          alert('Livre supprimé avec succès.');
          // Filtrer le livre supprimé de la liste des livres affichés
          this.myBooks = this.myBooks.filter(book => book.id !== bookId);
        },
        error: (err) => {
          console.error('Erreur lors de la suppression du livre', err);
          alert('Une erreur est survenue lors de la suppression du livre.');
        }
      });
    }
  }


  ngOnInit() {
    const authorId = this.getCurrentUserId();
    if (authorId) {
      this.categoryService.getCategories().subscribe(categories => {
        this.categories = categories;
        this.bookService.getBooksByAuthor(authorId).subscribe(books => {
          this.myBooks = books.map(book => {
            const category = this.categories.find(cat => cat.id === book.categoryId);
            return {
              ...book,
              categoryName: category ? category.label : 'Catégorie inconnue',
            };
          });
        });
      });
    }
  }


  showAddBookForm() {
    this.showForm = true;
  }

  getCurrentUserId(): number {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      const user = JSON.parse(userJson);
      return user.id; // Assurez-vous que votre objet User a bien un champ 'id'
    } else {
      return 0; // Ou tout autre indicateur que l'utilisateur n'est pas connecté
    }
  }

  addBook() {
    const authorId = this.getCurrentUserId();
    if (!authorId) {
      alert("Erreur d'identification de l'utilisateur.");
      return;
    }

    // Assurez-vous que authorId est ajouté au livre avant de l'envoyer
    const bookToCreate = { ...this.newBook, authorId } as Book;

    this.bookService.createBook(bookToCreate).subscribe({
      next: (book) => {
        this.myBooks.push(book);
        this.showForm = false; // Cacher le formulaire après l'ajout
        // Réinitialiser newBook pour un futur usage
        this.newBook = { title: '', resume: '', image: '', categoryId: 0 };
      },
      error: (error) => {
        console.error("Erreur lors de l'ajout du livre", error);
        alert("Erreur lors de l'ajout du livre");
      }
    });
  }





  logout() {
    localStorage.removeItem('user'); // Efface les informations de l'utilisateur connecté
    this.router.navigate(['/connexion']); // Redirige vers la page de connexion
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
