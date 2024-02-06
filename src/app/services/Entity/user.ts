export class User {
  constructor(
    public id: number,
    public firstname: string,
    public lastname: string,
    public email: string,
    public password: string, // Avertissement : ne jamais stocker de mots de passe en clair dans une application réelle !
    public role: string
  ) {}
}

