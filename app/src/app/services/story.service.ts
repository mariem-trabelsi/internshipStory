import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Stories } from '../model/story.model';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { InternsService } from './interns.service';

const httpOptions={
  headers:new HttpHeaders({'content-Type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class StoryService {
  storyy = new Stories();
  storyT:Stories[]=[];
  constructor(private internService:InternsService,private router:Router,private http:HttpClient) { }

  ListeStory():Observable<Stories[]>
  {
    return this.http.get<Stories[]>("http://localhost/internshipStory/php/afficheStories.php");
  }

  ajoutStory(str:Stories)
  {  
  return this.http.get<Stories>('http://localhost/internshipStory/php/ajoutStory.php?nom='+str.name+'&&contenu='+str.contenu+'&&image='+str.image+"&&likes="+str.likes+"&&comp="+str.compName+"&&email="+str.email);
  }




  
}
