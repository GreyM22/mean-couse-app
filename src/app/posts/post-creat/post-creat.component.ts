import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Post } from 'src/app/post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-creat',
  templateUrl: './post-creat.component.html',
  styleUrls: ['./post-creat.component.css']
})
export class PostCreatComponent implements OnInit {

  constructor( public postsService: PostsService) { }

  ngOnInit() {
  }

  onAddPost( form: NgForm) {
    if ( form.invalid ) {
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content);
    form.reset();
  }

}
