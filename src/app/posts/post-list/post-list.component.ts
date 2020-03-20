import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  private postUpdated: Subscription;

  constructor( public postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts();
    this.postUpdated = this.postsService.getUpdatedPost()
                     .subscribe(
                        (post) => this.posts = post
                     );
  }

  ngOnDestroy(){
    this.postUpdated.unsubscribe();
  }


}
