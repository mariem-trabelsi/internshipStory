import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Click } from '../model/click.model';

@Injectable({
  providedIn: 'root'
})
export class ClicksService {

  constructor(private http:HttpClient) { }

  addWhoCliks(c:Click):Observable<Click>{
    return this.http.get<Click>('http://localhost/internshipStory/php/ajoutClicks.php?id='+c.Id+'&&email='+c.email);
  }
}
