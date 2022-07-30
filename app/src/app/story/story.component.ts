import { Component, OnInit } from '@angular/core';
import { InternsService } from '../services/interns.service';
import { Stories } from '../model/story.model';
import { StoryService } from '../services/story.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  disAbled=true;
  story=new Stories();
  storyT:Stories[]=[];
  constructor(public internService:InternsService,public storyService:StoryService) { }
  icon  ="far fa-heart";
  count =2;
  ngOnInit()
  {
    this.storyService.ListeStory().
      subscribe((data:Stories[])=>{
      this.storyT=data;
      console.log(this.storyT);
    });
  }
 activeButton():Boolean{
  if (this.internService.isloggedIn)
  {this.disAbled = false;}
  return this.disAbled;
 }

  addLike(){
    if(this.icon =='far fa-heart'){
    this.icon ="fas fa-heart";
    this.count++;}
    else {
    this.icon = "far fa-heart";
    this.count--;
    }
  }

}
