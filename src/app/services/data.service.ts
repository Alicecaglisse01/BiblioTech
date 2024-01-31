import { InMemoryDbService } from 'angular-in-memory-web-api';

export class DataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, firstname: 'Jean', lastname: 'Dupont', email: 'jean.dupont@example.com', password: 'password123', role: 'user' },
    ];

    const categories = [
      { id: 1, label: 'Romance' },
    ];

    const book = [
      { id: 1, title: 'Les Misérables', resume: 'Résumé du livre', image: 'chemin/vers/l_image', createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', categoryId: 1, authorId: 1 },
    ];

    const page = [
      { id: 1, title: 'Chapitre 1', content: 'Contenu du chapitre 1', createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', bookId: 1 },
    ];

    return { users, categories, book, page };
  }
}
