import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators';

import { Post } from '../../models/post.i';
import { MainViewService } from '../../main-view.service';
import { User } from '../../models/user.i';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  user$: Observable<User>;

  constructor(private mainViewService: MainViewService) { }

  ngOnInit() {
    this.user$ = this.mainViewService.getUsers().pipe(
      map(users => {
        return users.find(user => user.id === this.post.author);
      })
    );
  }
}
