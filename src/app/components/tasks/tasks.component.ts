import { Component, effect } from '@angular/core';
import {
  SelectedUserService,
  User,
} from '../../services/selected-user.service';
import { Task, TasksService } from '../../services/tasks.service';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  selectedUser: User = { userId: '', userName: '', avatarUrl: '' };
  allTasks: Task[] | undefined = undefined;
  userTasks: Task[] = [];
  addTaskStatus: boolean = true;
  taskData = new FormControl<string | undefined>(undefined);
  addTaskError = false;
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
    this.addTaskError = false;
  }

  saveTask(task: string) {
    if (task) {
      this.taskService.addTask(
        this.allTasks!.length + 1,
        this.selectedUser.userId,
        task
      );
      this.addTaskError = false;
    } else {
      this.addTaskError = true;
    }
    this.taskData.setValue(undefined);
    this.addTaskStatus = false;
  }
}
