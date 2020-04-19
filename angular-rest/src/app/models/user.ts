import { Role } from './role';

export class User {
  id: number;
  username = '';
  password = '';
  name = '';
  role: Role;
}
