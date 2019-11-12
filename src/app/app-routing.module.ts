import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'main-view', loadChildren: () => import('./main-view/main-view.module').then(m => m.MainViewModule)
  },
  {
    path: 'author', loadChildren: () => import('./author/author.module').then(m => m.AuthorModule)
  },
  {
    path: '', redirectTo: '/main-view', pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
