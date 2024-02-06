import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { BOOKS } from './mock/mock-books'; // Assurez-vous que le chemin est correct
import { USERS } from './mock/mock-users'; // Assurez-vous que le chemin est correct
import { CATEGORIES } from './mock/mock-categories'; // Assurez-vous que le chemin est correct
import { PAGES } from './mock/mock-pages'; // Assurez-vous que le chemin est correct

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const books = BOOKS;
    const users = USERS;
    const categories = CATEGORIES;
    const pages = PAGES;

    return { books, users, categories, pages };
  }
}
