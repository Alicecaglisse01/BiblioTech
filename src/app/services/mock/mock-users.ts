import { User } from "../Entity/user";

export const USERS: User[] = [
  {
    id: 1,
    firstname: 'Alice',
    lastname: 'Doe',
    email: 'alice.doe@example.com',
    password: 'alice2024', // Remarque : Les mots de passe doivent être stockés de manière sécurisée
    role: 'admin'
  },
  {
    id: 2,
    firstname: 'Bob',
    lastname: 'Smith',
    email: 'bob.smith@example.com',
    password: 'bob2024', // Remarque : Les mots de passe doivent être stockés de manière sécurisée
    role: 'user'
  }
];
