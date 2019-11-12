import { NgModule } from '@angular/core';

import { MainViewService } from './main-view.service';
import { MainViewComponent } from './main-view.component';
import { MainViewRoutingModule } from './main-view-routing.module';
import { NewsFeedModule } from './news-feed/news-feed.module';

@NgModule({
  imports: [MainViewRoutingModule, NewsFeedModule],
  declarations: [MainViewComponent],
  providers: [MainViewService],
  exports: [MainViewComponent]
})
export class MainViewModule {

}
