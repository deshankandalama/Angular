import { Component, signal } from '@angular/core';
import { LoginComponent } from './login/login';

@Component({
  imports: [LoginComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('first-app');
}
