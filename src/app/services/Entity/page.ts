export class Page {
  constructor(
    public id: number,
    public title: string,
    public content: string,
    public createdAt: Date,
    public updatedAt: Date,
    public bookId: number // Clé étrangère faisant référence à un livre
  ) {}
}
