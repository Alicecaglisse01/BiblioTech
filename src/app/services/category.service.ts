import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from './Entity/category';
import { CATEGORIES } from './mock/mock-categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() {}

  // Simulez la récupération des catégories depuis un backend
  getCategories(): Observable<Category[]> {
    return of(CATEGORIES);
  }
}
