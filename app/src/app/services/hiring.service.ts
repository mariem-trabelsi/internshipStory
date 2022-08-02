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
}
