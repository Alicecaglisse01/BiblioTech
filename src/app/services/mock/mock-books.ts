import { Book } from "../Entity/book";

export const BOOKS: Book[] = [
  {
    id: 1,
    title: 'Les Misérables',
    resume: 'Un classique de la littérature française...',
    image: 'chemin/vers/image-les-miserables.jpg',
    createdAt: new Date('2024-01-01T00:00:00Z'),
    updatedAt: new Date('2024-01-01T00:00:00Z'),
    categoryId: 1,
    authorId: 1,
  },
  {
    id: 2,
    title: 'Le Comte de Monte-Cristo',
    resume: 'L\'histoire d\'Edmond Dantès...',
    image: 'chemin/vers/image-le-comte-de-monte-cristo.jpg',
    createdAt: new Date('2024-02-01T00:00:00Z'),
    updatedAt: new Date('2024-02-01T00:00:00Z'),
    categoryId: 1,
    authorId: 1,
  },
];
