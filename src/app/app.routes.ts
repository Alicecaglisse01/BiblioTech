import { Routes } from '@angular/router';
import { AccueilComponent } from '../app/pages/accueil/accueil.component';
import { ConnexionComponent } from '../app/pages/connexion/connexion.component';
import { InscriptionComponent } from '../app/pages/inscription/inscription.component';

export const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent }
];
