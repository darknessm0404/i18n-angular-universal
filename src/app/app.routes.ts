import { RouterConfig } from '@angular/router';
import { Home } from './home';
import { About } from './about';

export const routes: RouterConfig = [
  { path: '', redirectTo: 'home' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'about/:lang', component: About },
  { path: '**', redirectTo: 'home' }
];
