import { Component, effect } from '@angular/core';
import {
  SelectedUserService,
  User,
} from '../../services/selected-user.service';
import { Task, TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  selectedUser: User = { userId: '', userName: '', avatarUrl: '' };
  allTasks: Task[] | undefined = undefined;
  userTasks: Task[] = [];
  constructor(
    private selectedUserService: SelectedUserService,
    private taskService: TasksService
  ) {
    effect(() => {
      this.selectedUser = this.selectedUserService.selectedUser();
      this.allTasks = this.taskService.tasks();
      this.userTasks = [];
      for (let i = 0; i < this.allTasks.length; i++) {
        if (this.allTasks[i].user_id === this.selectedUser.userId) {
          this.userTasks.push(this.allTasks[i]);
        }
      }
    });
  }
}
