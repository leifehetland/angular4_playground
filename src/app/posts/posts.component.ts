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
      }, error => {
        alert('An unexpected error occured.');
        console.log(error);
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
      }, (error: Response) => {
        if (error.status === 400) {
          // this.form.setErrors(error.json());
        } else {
          alert('An unexpected error occured.');
          console.log(error);
        }
      });
  }

  updatePost(post) {
    this.service.updatePosts(post)
      .subscribe(response => {
        console.log('RESPONSE', response);
      }, error => {
        alert('An unexpected error occured.');
        console.log(error);
      });
    // this.http.put(this.url, JSON.stringify(post))
  }

  deletePost(post) {
    this.service.deletePost(345)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, (error: Response) => {
        if (error.status === 404) {
          alert('This post has already been deleted.');
        } else {
          alert('An unexpected error occured.');
          console.log(error);
        }
      });
  }

}
