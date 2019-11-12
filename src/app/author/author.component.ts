import { Component, OnInit } from '@angular/core';
import { MainViewService } from '../main-view/main-view.service';
import { Post } from '../main-view/models/post.i';
import { Router, ActivatedRoute } from '@angular/router';
import { map, filter, finalize } from 'rxjs/operators';
import { Observable, forkJoin, of } from 'rxjs';
import { User } from '../main-view/models/user.i';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  posts: Post[] = [];
  user: User;
  userId: string;
  loading = true;

  constructor(private mainViewService: MainViewService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    const usersResponse = this.mainViewService.getUsers();
    const postsResponse = this.mainViewService.getPosts();

    forkJoin([usersResponse, postsResponse]).pipe(
      finalize(() => {
        this.loading = false;
      })).subscribe(results => {
        const [users, posts] = results;
        this.user = users.find(user => user.id === this.userId);
        this.posts = posts.filter(post => post.author === this.userId);
      });
  }
}
