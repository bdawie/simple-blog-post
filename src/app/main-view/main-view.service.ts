import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './models/post.i';
import { User } from './models/user.i';

@Injectable()
export class MainViewService {

  constructor(private http: HttpClient) { }

  getPosts() {
    const postsURL = 'http://my-json-server.typicode.com/orlovskyalex/jellyfish-fake-rest-server/posts';
    return this.http.get<Post[]>(postsURL);
  }

  getUsers() {
    const usersURL = 'http://my-json-server.typicode.com/orlovskyalex/jellyfish-fake-rest-server/users';
    return this.http.get<User[]>(usersURL);
  }

  // TODO getComments(). Maybe next time ;)
}
