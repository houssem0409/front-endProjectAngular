import {User} from './user';
import {Roles} from './roles';

export class Student extends User{

  constructor(id: number, email: string, password: string, username: string, roles: Array<Roles>) {
    super(id, email, password, username, roles);
  }
}
