import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importe Router
import { AccueilComponent } from '../accueil/accueil.component';
import { ConnexionComponent } from '../connexion/connexion.component';
import { BookListComponent } from '../BookListComponent/booklist.component';


@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [AccueilComponent, ConnexionComponent, BookListComponent],
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  constructor(private router: Router) {} // Ajoute le Router au constructeur

  navigate(path: string) {
    this.router.navigate([path]); // Utilise le router pour naviguer
  }
}
