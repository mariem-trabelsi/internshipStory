import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hire } from '../model/hire.model';

@Injectable({
  providedIn: 'root'
})
export class HiringService {

  constructor(private http:HttpClient) { }

  ListeToHire():Observable<Hire[]>{
    return this.http.get<Hire[]>('http://localhost/internshipStory/php/toHire.php');
  }
  addToHire(hire:Hire):Observable<Hire>{
    return this.http.get<Hire>('http://localhost/internshipStory/php/insToHire.php?nom='+hire.name+'&&contenu='+hire.contenu+'&&image='+hire.image+"&&likes="+hire.likes+"&&comp="+hire.compName+"&&email="+hire.email+"&&local="+hire.local);
  }

  ListeToHireFiltred(hire:Hire):Observable<Hire[]>{
    return this.http.get<Hire[]>('http://localhost/internshipStory/php/search.php?region='+hire.local);
  }

  updatePlus(hire:Hire):Observable<Hire>
  {
    return this.http.get<Hire>("http://localhost/internshipStory/php/updatePLikes.php?id="+hire.Id);
  }

  updateMoins(h:Hire):Observable<Hire>
  {
    return this.http.get<Hire>("http://localhost/internshipStory/php/updateMLikes.php?id="+h.Id);
  }

  suppHiring(h:Hire){
    return this.http.get<Hire[]>('http://localhost/internshipStory/php/suppHiring.php?id='+h.Id);
  }
}
