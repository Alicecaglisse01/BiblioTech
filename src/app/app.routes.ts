import { Routes } from '@angular/router';
import { AccueilComponent } from '../app/pages/accueil/accueil.component';
import { ConnexionComponent } from '../app/pages/connexion/connexion.component';
import { InscriptionComponent } from '../app/pages/inscription/inscription.component';
import { BookListComponent } from './pages/BookListComponent/booklist.component';
import { AuthGuard } from './services/auth.guard';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { MesContributionsComponent } from './pages/mes-contributions/mes-contributions.component';
import { ProfilComponent } from './pages/profil/profil.component';

export const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  {  path: 'books', component: BookListComponent },
  // {  path: 'books', component: BookListComponent, canActivate: [AuthGuard] }
  { path: 'book/:id', component: BookDetailComponent },
  { path: 'contributions', component: MesContributionsComponent },
  { path: 'profil', component: ProfilComponent },
];
