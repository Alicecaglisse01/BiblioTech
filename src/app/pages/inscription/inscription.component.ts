import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importe Router
import { AccueilComponent } from '../accueil/accueil.component';
import { ConnexionComponent } from '../connexion/connexion.component';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [AccueilComponent, ConnexionComponent,FormsModule],
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  newUser = {
    firstname: '', // Correspond à "prenom"
    lastname: '', // Correspond à "nom"
    email: '',
    password: '',
    role: 'user', // Valeur par défaut pour l'exemple
  };
  constructor(private router: Router, private userService: UserService) {}

  navigate(path: string) {
    this.router.navigate([path]); // Utilise le router pour naviguer
  }

  onSubmit() {
    // Convertissez newUser en une instance de User ou ajustez selon votre backend
    this.userService.createUser(this.newUser as any, /* currentUserId */).subscribe({
      next: (user) => {
        this.router.navigate(['/connexion']);
      },
      error: (error) => {
        console.error("Erreur lors de l'inscription", error);
        alert("Erreur lors de l'inscription");
      }
    });
  }
}
