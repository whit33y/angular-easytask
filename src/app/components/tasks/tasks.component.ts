import { Component, effect } from '@angular/core';
import {
  SelectedUserService,
  User,
} from '../../services/selected-user.service';
import { Task, TasksService } from '../../services/tasks.service';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  selectedUser: User = { userId: '', userName: '', avatarUrl: '' };
  allTasks: Task[] | undefined = undefined;
  userTasks: Task[] = [];
  addTaskStatus: boolean = true;
  taskData = new FormControl<string | undefined>(undefined);
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

  addTask() {
    this.addTaskStatus = !this.addTaskStatus;
    console.log(this.addTaskStatus);
  }

  saveTask() {
    console.log(this.taskData.value);
    this.taskData.setValue(undefined);
    this.addTaskStatus = false;
  }
}
