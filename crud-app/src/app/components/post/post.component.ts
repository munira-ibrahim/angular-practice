import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Posts } from 'src/app/model/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  
  posts : Posts[];
  Selectedpost : Posts;

  showPost : boolean = false;
  
  

  constructor(private postService : PostService) { }

  ngOnInit(): void {
    this.getPosts()
  }

  private getPosts(){
    this.postService.getPosts()
      .subscribe(posts => {
        this.posts = posts;
      })
  }

  onSelectedPost(post : Posts){
    
    this.Selectedpost = post;
    console.log(this.Selectedpost);
  }

  

  onAddNewPost(newPost : Posts){
    this.postService.createPost(newPost)
      .subscribe(response => {
        this.getPosts();
        this.showPost = false;
      })
  }
}
