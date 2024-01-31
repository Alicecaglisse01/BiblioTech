import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importe Router


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})

export class ConnexionComponent {
  constructor(private router: Router) {} // Ajoute le Router au constructeur

  navigate(path: string) {
    this.router.navigate([path]); // Utilise le router pour naviguer
  }
}
