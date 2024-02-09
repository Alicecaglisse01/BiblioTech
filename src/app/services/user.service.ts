import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { User } from './Entity/user'; // Assurez-vous que le chemin est correct

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'api/users'; // URL de l'API pour les utilisateurs

  constructor(private http: HttpClient) {}

  // Récupérer tous les utilisateurs (pour les admins)
  getAllUsers(): Observable<User[]> {
    // Simuler la vérification du rôle d'administrateur
    return this.http.get<User[]>(this.usersUrl);
  }

  // Récupérer un utilisateur par son ID
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${id}`);
  }

  // Créer un nouvel utilisateur (pour les admins)
  createUser(user: User, currentUserId?: number): Observable<User> {    // Simuler la vérification du rôle d'administrateur
    return this.http.post<User>(this.usersUrl, user);
  }

  // Modifier un utilisateur (l'utilisateur peut modifier ses informations)
  updateUser(user: User, currentUserId: number): Observable<User> {
    // L'utilisateur peut modifier uniquement son profil ou si c'est un admin
    if (user.id !== currentUserId && !this.isAdmin(currentUserId)) {
      return throwError(() => new Error('Unauthorized'));
    }
    return this.http.put<User>(`${this.usersUrl}/${user.id}`, user);
  }

  // Supprimer un utilisateur (pour les admins)
  deleteUser(id: number, currentUserId: number): Observable<User> {
    // Simuler la vérification du rôle d'administrateur
    if (!this.isAdmin(currentUserId)) {
      return throwError(() => new Error('Unauthorized'));
    }
    return this.http.delete<User>(`${this.usersUrl}/${id}`);
  }
  

  // Méthode privée pour déterminer si l'utilisateur est un administrateur
  private isAdmin(userId: number): boolean {
    // Définissez explicitement le type de 'adminUsers' comme un tableau de nombres
    const adminUsers: number[] = [/* IDs des utilisateurs administrateurs, par exemple 1, 2, etc. */];
    return adminUsers.includes(userId);
  }

}
