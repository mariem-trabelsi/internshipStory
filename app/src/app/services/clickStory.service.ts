import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { clickerS } from '../model/clickerS.model';
import { Stories } from '../model/story.model';

@Injectable({
  providedIn: 'root'
})
export class ClicksService {

  constructor(private http:HttpClient) { }

  afficheClickerStory(s:Stories):Observable<clickerS[]>{
    return this.http.get<clickerS[]>('http://localhost/internshipStory/php/afficheClicksStory.php?id='+s.Id);
  }
}
