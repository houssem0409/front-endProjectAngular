import {Roles} from "./roles";

export class User {
  id: number;
  email: string;
  password: string;
  username: string;
  roles: Array<Roles>;


  constructor(id: number, email: string, password: string, username: string, roles: Array<Roles>) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.username = username;
    this.roles = roles;
  }
}
