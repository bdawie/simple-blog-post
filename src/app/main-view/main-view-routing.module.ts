import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { MainViewComponent } from './main-view.component';

const routes: Route[] = [
  { path: '', component: MainViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainViewRoutingModule {

}
