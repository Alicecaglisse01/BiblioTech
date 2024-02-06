export class Book {
  constructor(
    public id: number,
    public title: string,
    public resume: string,
    public image: string,
    public createdAt: Date,
    public updatedAt: Date,
    public categoryId: number, // Clé étrangère pour la catégorie
    public authorId: number // Clé étrangère pour l'utilisateur qui a écrit le livre
  ) {}
}
