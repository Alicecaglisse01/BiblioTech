import { Page } from "../Entity/page"; // Ajustez le chemin d'importation selon votre structure de projet

export const PAGES: Page[] = [
  {
    id: 1,
    title: 'Introduction',
    content: 'Contenu de l\'introduction...',
    createdAt: new Date('2024-01-01T00:00:00Z'),
    updatedAt: new Date('2024-01-01T00:00:00Z'),
    bookId: 1
  },
  {
    id: 2,
    title: 'Chapitre 1',
    content: 'Contenu du chapitre 1...',
    createdAt: new Date('2024-01-01T00:00:00Z'),
    updatedAt: new Date('2024-01-01T00:00:00Z'),
    bookId: 1
  },
  {
    id: 3,
    title: 'Chapitre 2',
    content: 'Contenu du chapitre 2...',
    createdAt: new Date('2024-01-01T00:00:00Z'),
    updatedAt: new Date('2024-01-01T00:00:00Z'),
    bookId: 1
  }
  // Ajoutez d'autres pages si nécessaire
];
