import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import { Posts } from 'src/app/model/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  @Input() post : Posts;
  @Output() onDeleteEvent = new EventEmitter<any>();

  constructor(private postService : PostService) { }

  ngOnInit(): void {
    //console.log(this.post);
  }

  onDelete(){
    this.postService.deletePost(this.post.id).subscribe((response) => {
      this.onDeleteEvent.emit();
    });
  }

  onEdit(){
    const { id, body, publish } = this.post;
    this.postService.editPost(id, body, publish).subscribe((response) => {
      this.onDeleteEvent.emit();
    });
  }

}
