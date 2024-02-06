import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './Entity/category'; // Assurez-vous que le chemin est correct


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoriesUrl = 'api/categories'; // URL to web API for categories

  constructor(private http: HttpClient) {}

  // Get all categories
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl);
  }

  // Get a single category by id
  getCategoryById(id: number): Observable<Category> {
    const url = `${this.categoriesUrl}/${id}`;
    return this.http.get<Category>(url);
  }

  // Create a new category
  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.categoriesUrl, category);
  }

  // Update a category
  updateCategory(category: Category): Observable<any> {
    return this.http.put(`${this.categoriesUrl}/${category.id}`, category);
  }

  // Delete a category
  deleteCategory(id: number): Observable<Category> {
    const url = `${this.categoriesUrl}/${id}`;
    return this.http.delete<Category>(url);
  }

  // Additional methods as per your requirements can be added here
  // For example, a method to check if the user is an admin could be added
  // isAdmin(userId: number): boolean {
  //   // Implement your logic to check if the user is an admin
  // }
}
