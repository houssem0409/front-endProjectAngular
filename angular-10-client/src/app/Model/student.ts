import {User} from './user';
import {Role} from './role';

export class Student extends User{

  constructor(id: number, email: string, password: string, username: string, role: Role) {
    super(id, email, password, username, role);
  }
}
