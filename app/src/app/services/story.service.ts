import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Stories } from '../model/story.model';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions={
  headers:new HttpHeaders({'content-Type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class StoryService {
  storyy = new Stories();
  storyT:Stories[]=[];
  constructor(private router:Router,private http:HttpClient) { }

  ListeStory():Observable<Stories[]>
  {
    return this.http.get<Stories[]>("http://localhost/internshipStory/php/afficheStories.php");
  }
  
}
