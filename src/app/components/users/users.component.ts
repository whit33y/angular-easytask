import { Component } from '@angular/core';
import { DUMMY_USERS as users } from '../../../../dummy-users';
import { UserComponent } from './user/user.component';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  users = users;
}
