import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { PageService } from '../../services/page.service';
import { Book } from '../../services/Entity/book';
import { Page } from '../../services/Entity/page';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book!: Book;
  pages: Page[] = [];
  currentPageIndex: number = 0; // Index de la page actuelle
  isAuthor: boolean = false;




  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private pageService: PageService,
    private router: Router
  ) {}


  ngOnInit() {
    const bookId = +this.route.snapshot.params['id'];
    const userId = localStorage.getItem('userId'); // Récupérez l'userId pour vérifier l'autorisation

    this.bookService.getBookById(bookId).subscribe(book => {
        this.book = book;
        // Assurez-vous que les deux valeurs sont des chaînes pour la comparaison
        this.isAuthor = book.authorId.toString() === userId;
        console.log('Author ID:', book.authorId, 'User ID:', userId, 'Is Author:', this.isAuthor); // Pour le débogage
        this.pageService.getPagesByBookId(bookId).subscribe(pages => this.pages = pages);
    });
}



  editBook() {
    // Logique pour activer le mode d'édition ou naviguer vers un composant de formulaire d'édition
    // Par exemple, vous pouvez naviguer vers une route avec un formulaire d'édition pour le livre
    this.router.navigate(['/edit-book', this.book.id]);
  }

  nextPage() {
    if (this.currentPageIndex < this.pages.length - 1) {
      this.currentPageIndex++;
    }
  }
  previousPage() {
    if (this.currentPageIndex > 0) {
      this.currentPageIndex--;
    }
  }


  // Ajoutez une méthode pour revenir à la page précédente si nécessaire

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/connexion']);
  }

  // Méthodes pour la navigation restent inchangées...


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

