import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from './shared/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'characters',
        loadChildren: () => import('./features/rick-and-morty/rick-and-morty.module').then(m => m.RickAndMortyModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
