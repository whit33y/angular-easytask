import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks = signal<Task[]>([
    //#region mock
    { id: 1, user_id: 'u1', task: 'Do the dishes', status: false },
    { id: 2, user_id: 'u1', task: 'Take out the trash', status: true },
    {
      id: 3,
      user_id: 'u2',
      task: 'Complete the project report',
      status: true,
    },
    { id: 4, user_id: 'u2', task: 'Prepare a presentation', status: false },
    { id: 5, user_id: 'u2', task: 'Submit tax forms', status: false },
    { id: 6, user_id: 'u3', task: 'Walk the dog', status: false },
    { id: 7, user_id: 'u4', task: 'Water the plants', status: true },
    { id: 8, user_id: 'u4', task: 'Clean the kitchen', status: false },
    { id: 9, user_id: 'u5', task: 'Buy groceries', status: false },
    { id: 10, user_id: 'u5', task: 'Organize the closet', status: true },
    { id: 11, user_id: 'u6', task: 'Fix the leaking faucet', status: false },
    { id: 12, user_id: 'u6', task: 'Paint the fence', status: false },
    { id: 13, user_id: 'u7', task: 'Plan a birthday party', status: false },
    { id: 14, user_id: 'u8', task: 'Call the bank', status: false },
    { id: 15, user_id: 'u8', task: 'Respond to emails', status: true },
    {
      id: 16,
      user_id: 'u9',
      task: 'Schedule a dentist appointment',
      status: true,
    },
    {
      id: 17,
      user_id: 'u10',
      task: 'Prepare a report for work',
      status: true,
    },
    { id: 18, user_id: 'u10', task: 'Create a shopping list', status: false },
    { id: 19, user_id: 'u11', task: 'Plan the weekend trip', status: true },
    { id: 20, user_id: 'u12', task: 'Sort the laundry', status: false },
    { id: 21, user_id: 'u12', task: 'Vacuum the living room', status: false },
    { id: 22, user_id: 'u13', task: 'Mow the lawn', status: false },
    { id: 23, user_id: 'u14', task: 'Refill the bird feeder', status: false },
    { id: 24, user_id: 'u15', task: 'Clean the windows', status: true },
    { id: 25, user_id: 'u16', task: 'Organize the garage', status: false },
    { id: 26, user_id: 'u17', task: 'Check the car oil level', status: false },
    { id: 27, user_id: 'u17', task: 'Wash the car', status: true },
    { id: 28, user_id: 'u18', task: 'Write a thank-you note', status: false },
    { id: 29, user_id: 'u18', task: 'Prepare dinner', status: false },
    { id: 30, user_id: 'u18', task: 'Walk the dog', status: true },
    //#endregion
  ]);

  addTask(id: number, user_id: string, task: string, status: boolean) {
    const newTask: Task = { id, user_id, task, status };
    this.tasks.update((currentTasks) => [...currentTasks, newTask]);
  }

  completeTask(id: number) {
    this.tasks.update((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, status: true } : task
      )
    );
  }

  deleteTask(id: number) {
    this.tasks.update((currentTasks) =>
      currentTasks.filter((task) => task.id !== id)
    );
  }
}

export type Task = {
  id: number;
  user_id: string;
  task: string;
  status: boolean;
};
