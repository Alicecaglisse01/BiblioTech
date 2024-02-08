import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mes-contributions',
  standalone: true,
  imports: [],
  templateUrl: './mes-contributions.component.html',
  styleUrl: './mes-contributions.component.css'
})
export class MesContributionsComponent {

  constructor(
    private router: Router
  ) {}

  logout(): void {
    // Redirige l'utilisateur vers la page de connexion
    this.router.navigate(['/connexion']);
    // Ici, vous pouvez également ajouter une logique pour effacer toutes les données d'authentification stockées
  }

}
