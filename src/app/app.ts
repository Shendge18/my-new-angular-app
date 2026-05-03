import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent } from "./header/header";
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-new-angular-app');
  users = DUMMY_USERS;

  onSelectUser(id: string){
    console.log('Selected user with id:', id);
  }
}
