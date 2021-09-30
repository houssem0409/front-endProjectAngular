import {Role} from './role';

export class User {
  id: number;
  email: string;
  password: string;
  username: string;
  role: Role;


  constructor(id: number, email: string, password: string, username: string, role: Role) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.username = username;
    this.role = role;
  }
}
