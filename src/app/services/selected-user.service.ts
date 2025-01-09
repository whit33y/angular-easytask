import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SelectedUserService {
  selectedUser = signal<User>({ userId: '', userName: '', avatarUrl: '' });

  constructor() {}

  setSelectedUser(userId: string, userName: string, avatarUrl: string) {
    this.selectedUser.set({ userId, userName, avatarUrl });
  }
}

export type User = {
  userId: string;
  userName: string;
  avatarUrl: string;
};
