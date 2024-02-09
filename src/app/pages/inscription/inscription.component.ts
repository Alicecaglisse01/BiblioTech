import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importe Router
import { AccueilComponent } from '../accueil/accueil.component';
import { ConnexionComponent } from '../connexion/connexion.component';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [AccueilComponent, ConnexionComponent,FormsModule,CommonModule],
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
  passwordValidationMessage: string = '';

  constructor(private router: Router, private userService: UserService) {}

  navigate(path: string) {
    this.router.navigate([path]);
  }

  onSubmit() {
    // Vérifiez si tous les champs sont remplis
    if (!this.newUser.firstname || !this.newUser.lastname || !this.newUser.email || !this.isValidPassword(this.newUser.password)) {
      alert("Veuillez remplir tous les champs correctement.");
      return;
    }
  
    // Si la validation est passée, créez l'utilisateur
    this.userService.createUser(this.newUser as any).subscribe({
      next: (user) => {
        // Redirection vers la page de connexion après l'inscription réussie
        this.router.navigate(['/connexion']);
      },
      error: (error) => {
        console.error("Erreur lors de l'inscription", error);
        alert("Erreur lors de l'inscription");
      }
    });
  }

  isValidPassword(password: string): boolean {
    const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{12,}$");
    const isValid = regex.test(password);
    
    if (!isValid) {
      this.passwordValidationMessage = "Le mot de passe doit comporter au moins 12 caractères, inclure des majuscules, des minuscules, des chiffres et des caractères spéciaux.";
    } else {
      this.passwordValidationMessage = ''; // Réinitialiser le message si le mot de passe est valide
    }

    return isValid;
  }
}
