import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService, Book } from '../../services/book.service'; // Assurez-vous d'ajuster le chemin selon votre structure de projet

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  books: Book[] = []; // Stocke la liste des livres

  constructor(private router: Router, private bookService: BookService) {}

  ngOnInit() {
    this.getBooks(); // Récupère les livres lors de l'initialisation du composant
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe(books => this.books = books);
  }

  navigate(path: string) {
    this.router.navigate([path]);
  }
}



