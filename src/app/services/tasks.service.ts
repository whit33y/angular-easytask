import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks = signal<Task[]>([
    //#region mock
    { id: 1, user_id: 'u1', task: 'Do the dishes' },
    { id: 2, user_id: 'u1', task: 'Take out the trash' },
    { id: 3, user_id: 'u2', task: 'Complete the project report' },
    { id: 4, user_id: 'u2', task: 'Prepare a presentation' },
    { id: 5, user_id: 'u2', task: 'Submit tax forms' },
    { id: 6, user_id: 'u3', task: 'Walk the dog' },
    { id: 7, user_id: 'u4', task: 'Water the plants' },
    { id: 8, user_id: 'u4', task: 'Clean the kitchen' },
    { id: 9, user_id: 'u5', task: 'Buy groceries' },
    { id: 10, user_id: 'u5', task: 'Organize the closet' },
    { id: 11, user_id: 'u6', task: 'Fix the leaking faucet' },
    { id: 12, user_id: 'u6', task: 'Paint the fence' },
    { id: 13, user_id: 'u7', task: 'Plan a birthday party' },
    { id: 14, user_id: 'u8', task: 'Call the bank' },
    { id: 15, user_id: 'u8', task: 'Respond to emails' },
    { id: 16, user_id: 'u9', task: 'Schedule a dentist appointment' },
    { id: 17, user_id: 'u10', task: 'Prepare a report for work' },
    { id: 18, user_id: 'u10', task: 'Create a shopping list' },
    { id: 19, user_id: 'u11', task: 'Plan the weekend trip' },
    { id: 20, user_id: 'u12', task: 'Sort the laundry' },
    { id: 21, user_id: 'u12', task: 'Vacuum the living room' },
    { id: 22, user_id: 'u13', task: 'Mow the lawn' },
    { id: 23, user_id: 'u14', task: 'Refill the bird feeder' },
    { id: 24, user_id: 'u15', task: 'Clean the windows' },
    { id: 25, user_id: 'u16', task: 'Organize the garage' },
    { id: 26, user_id: 'u17', task: 'Check the car oil level' },
    { id: 27, user_id: 'u17', task: 'Wash the car' },
    { id: 28, user_id: 'u18', task: 'Write a thank-you note' },
    { id: 29, user_id: 'u18', task: 'Prepare dinner' },
    { id: 30, user_id: 'u18', task: 'Walk the dog' },
    //#endregion
  ]);

  constructor() {}

  addTask(id: number, user_id: string, task: string) {
    const newTask: Task = { id, user_id, task };
    this.tasks.update((currentTasks) => [...currentTasks, newTask]);
  }

  deleteTask(id: number) {
    //do uzupełnienia
  }
}

export type Task = {
  id: number;
  user_id: string;
  task: string;
};
