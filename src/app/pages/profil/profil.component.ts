import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../services/Entity/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  currentUser!: User;


  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.loadCurrentUser();
  }

  loadCurrentUser() {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      this.currentUser = JSON.parse(userJson);
    } else {
      // Gérer le cas où aucun utilisateur n'est connecté / trouvé
      this.router.navigate(['/connexion']);
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

  
  saveChanges() {
    if (this.currentUser) {
      // Mise à jour de l'utilisateur dans le localStorage
      localStorage.setItem('user', JSON.stringify(this.currentUser));
  
}

  }
}
