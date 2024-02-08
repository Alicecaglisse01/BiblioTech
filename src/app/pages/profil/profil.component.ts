import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {

  constructor(
    private router: Router
  ) {}

  logout(): void {
    // Redirige l'utilisateur vers la page de connexion
    this.router.navigate(['/connexion']);
    // Ici, vous pouvez également ajouter une logique pour effacer toutes les données d'authentification stockées
  }
}
