import { Routes } from '@angular/router';

export const routes: Routes = [
     {
    path: '',
    loadComponent: () => import('./core/layout/public-layout/public-layout').then(m => m.PublicLayout),
    children: [
      {
        path: '',
        loadComponent: () => import('./domains/public/pages/home/home').then(m => m.Home)
      },
      {
        path: 'skills',
        loadComponent: () => import('./domains/public/pages/skills/skills').then(m => m.Skills)
      },
       {
        path: 'contact',
        loadComponent: () => import('./domains/public/pages/contact/contact').then(m => m.Contact)
      }
    ]
  },
  { path: '**', redirectTo: '' }
];
