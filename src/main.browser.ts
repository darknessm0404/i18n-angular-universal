// Angular 2 Universal
import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { AboutContent } from './app/about/about.content'
import { I18nService } from './app/i18n.service'

// Application
import {App} from './app/app.component';
import {routes} from './app/app.routes';

// you must return bootstrap for client.ts
export function ngApp() {
  return bootstrap(App, [
    ...HTTP_PROVIDERS,
    AboutContent,
    I18nService,
    provideRouter(routes)
  ]);
}
