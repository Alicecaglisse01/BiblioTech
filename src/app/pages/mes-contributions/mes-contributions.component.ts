// Dans mes-contributions.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../services/Entity/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mes-contributions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mes-contributions.component.html',
  styleUrls: ['./mes-contributions.component.css']
})
// Dans mes-contributions.component.ts

export class MesContributionsComponent implements OnInit {
  myBooks: Book[] = [];

  constructor(
    private router: Router,
    private bookService: BookService
  ) {}

  ngOnInit() {
    const authorId = this.getCurrentUserId();
    if (authorId) {
      this.bookService.getBooksByAuthor(authorId).subscribe(books => {
        this.myBooks = books;
      });
    }
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
