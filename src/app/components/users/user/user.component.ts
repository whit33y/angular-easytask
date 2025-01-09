import { Component, input } from '@angular/core';
import { SelectedUserService } from '../../../services/selected-user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  name = input('');
  id = input('');
  avatar = input('');

  constructor(private selectedUserService: SelectedUserService) {}

  selectUser() {
    this.selectedUserService.setSelectedUser(
      this.id(),
      this.name(),
      this.avatar()
    );
  }
}
