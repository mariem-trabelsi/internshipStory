import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commentaire } from '../model/comment.model';


@Injectable({
  providedIn: 'root'
})
export class CmtService {

  constructor(private http:HttpClient) { }


ListeComment():Observable<Commentaire[]>{
  return this.http.get<Commentaire[]>('http://localhost/internshipStory/php/afficheComment.php');
}

insertComment(c:Commentaire):Observable<Commentaire>{
  return this.http.get<Commentaire>('http://localhost/internshipStory/php/ajoutComment.php?contenu1='+c.contenu+'&&nom1='+c.name+'&&image1='+c.image+'&&id1='+c.Id2);
}

}