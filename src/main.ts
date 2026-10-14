import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { LoginComponent } from './login/login';

bootstrapApplication(LoginComponent, appConfig,)
  .catch((err) => console.error(err));
