import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importe Router
import { ConnexionComponent } from '../connexion/connexion.component';
import { InscriptionComponent } from '../inscription/inscription.component';
import { BookListComponent } from '../BookListComponent/booklist.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [ConnexionComponent, InscriptionComponent, BookListComponent],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
