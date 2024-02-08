import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    // Ici, insérez votre logique d'authentification
    const isLoggedIn = !!localStorage.getItem('user'); // Exemple de vérification

    if (!isLoggedIn) {
      this.router.navigate(['/connexion']); // Redirige vers la page de connexion
      return false;
    }

    return true;
  }
}
