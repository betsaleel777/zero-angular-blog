import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
  @Input() post
  constructor() { }

  ngOnInit() {
  }

  getStyle() {
    if(this.post.loveIts > 0){
      return {'list-group-item-success': true}
    }else if(this.post.loveIts < 0){
      return {'list-group-item-danger': true} 
    }else{
      return {'list-group-item list-group-item-action flex-column align-items-start':true}
    }
  }

  onLike() {
    this.post.loveIts++
    console.log(this.post.loveIts)
  }

  onDislike() {
    this.post.loveIts--
    console.log(this.post.loveIts)
  }
}
