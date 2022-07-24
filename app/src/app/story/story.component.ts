import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  disAbled=true;
  constructor(public authService:AuthService) { }
  icon ="far fa-heart";
  count=2;
  ngOnInit(): void {
  }

 activeButton():Boolean{
  if (this.authService.isloggedIn)
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
