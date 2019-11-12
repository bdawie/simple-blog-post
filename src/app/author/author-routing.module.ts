import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorComponent } from './author.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/main-view', pathMatch: 'full'
  },
  {
    path: ':id', component: AuthorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule { }
