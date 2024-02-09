import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../services/Entity/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent implements OnInit {
  book!: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit() {
    const bookId = +this.route.snapshot.params['id'];
    this.bookService.getBookById(bookId).subscribe(book => this.book = book);
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

