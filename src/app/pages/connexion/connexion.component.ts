import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importe Router
import { AccueilComponent } from '../accueil/accueil.component';
import { InscriptionComponent } from '../inscription/inscription.component';
import { BookListComponent } from '../BookListComponent/booklist.component';
import { UserService } from '../../services/user.service';
import { USERS } from '../../services/mock/mock-users';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [AccueilComponent, InscriptionComponent, BookListComponent, FormsModule],
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})


export class ConnexionComponent {
  user = {
    email: '',
    password: ''
  };

  constructor(private router: Router, private userService: UserService) {}

  navigate(path: string) {
    this.router.navigate([path]); // Utilise le router pour naviguer
  }

  onSubmit() {
    // Ici, tu devrais appeler une méthode de ton service pour vérifier les identifiants
    // Simulons la vérification avec les données de mock-users.ts
    const validUser = USERS.find(u => u.email === this.user.email && u.password === this.user.password);
    if (validUser) {
      // Si les identifiants sont corrects, on navigue vers /books
      this.router.navigate(['/books']);
    } else {
      // Sinon, affiche une alerte ou une notification
      alert('Identifiants incorrects');
    }
  }
}
