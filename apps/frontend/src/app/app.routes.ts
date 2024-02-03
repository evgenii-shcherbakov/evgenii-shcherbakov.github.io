import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/pages/home-page/home-page.component').then(
        (mod) => mod.HomePageComponent,
      ),
  },
  {
    path: 'cv',
    loadComponent: () =>
      import('./features/cv/pages/cv-page/cv-page.component').then((mod) => mod.CvPageComponent),
  },
  {
    path: 'cv/:cvAlias',
    loadComponent: () =>
      import('./features/cv/pages/cv-page/cv-page.component').then((mod) => mod.CvPageComponent),
  },
];
