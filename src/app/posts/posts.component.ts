import { Component, OnInit } from '@angular/core';
import {PostService} from "./../services/post.service";

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        console.log("Response: ", response.json());
        this.posts = response.json();
      });
  }

  createPost(input: HTMLInputElement) {
    let post: any = {
      title: input.value
    };
    input.value = '';
      this.service.createPosts(post)
      .subscribe(response => {
        post.id = response.json().id;
        this.posts.splice(0, 0, post)
        console.log("Response: ", response.json());
      });
  }

  updatePost(post) {
    this.service.updatePosts(post)
      .subscribe(response => {
        console.log('RESPONSE', response);
      })
    // this.http.put(this.url, JSON.stringify(post))
  }

  deletePost(post) {
    this.service.deletePost(post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      })
  }

}
