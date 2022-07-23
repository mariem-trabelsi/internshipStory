import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  constructor() { }
  icon ="far fa-heart";
  count=2;
  ngOnInit(): void {
  }

  addLike(){
    if(this.icon =='far fa-heart'){
    this.icon="fas fa-heart";
    this.count++;}
    else {
    this.icon = "far fa-heart";
    this.count--;
    }
  }

}
