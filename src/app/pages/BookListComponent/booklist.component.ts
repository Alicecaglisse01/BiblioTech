import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../services/Entity/book'
import { AccueilComponent } from '../accueil/accueil.component';
import { ConnexionComponent } from '../connexion/connexion.component';
import { InscriptionComponent } from '../inscription/inscription.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [ HttpClientModule,CommonModule, ],
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getAllBooks()
      .subscribe((data: Book[]) => {
        this.books = data;
      }, error => {
        console.error('There was an error!', error);
      });
  }
}

