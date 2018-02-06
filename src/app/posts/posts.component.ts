import { Component, OnInit } from '@angular/core';
import { PostService } from './../services/post.service';
import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { BadInput } from './../common/bad-input';


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
      }, (error: AppError) => {
        if (error instanceof BadInput) {
          // this.form.setErrors(error.originalError);
        } else throw error;
      });
  }

  updatePost(post) {
    this.service.updatePosts(post)
      .subscribe(response => {
        console.log('RESPONSE', response);
      });
    // this.http.put(this.url, JSON.stringify(post))
  }

  deletePost(post) {
    this.service.deletePost(post)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('This post has already been deleted.');
        } else throw error;
      });
  }

}
