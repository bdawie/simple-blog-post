import { Component, OnInit, OnDestroy } from '@angular/core';

import { Post } from '../models/post.i';
import { MainViewService } from '../main-view.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit, OnDestroy {

  posts: Post[] = [];

  constructor(private mainViewService: MainViewService) { }

  ngOnInit() {
    this.mainViewService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  ngOnDestroy() {

  }

}
