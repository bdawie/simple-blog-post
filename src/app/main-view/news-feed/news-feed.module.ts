import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NewsFeedComponent } from './news-feed.component';
import { PostModule } from './post/post.module';



@NgModule({
  declarations: [NewsFeedComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    PostModule,
  ],
  exports: [NewsFeedComponent],
})
export class NewsFeedModule { }
