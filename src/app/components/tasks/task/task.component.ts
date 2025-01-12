import { Component, Input } from '@angular/core';
import { TasksService } from '../../../services/tasks.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() task: string = '';
  @Input() id: number | undefined = undefined;
  @Input() status: boolean = false;

  constructor(private tasksService: TasksService) {}

  completeTask(id: number) {
    this.tasksService.completeTask(id);
  }

  deleteTask(id: number) {
    this.tasksService.deleteTask(id);
  }
}
