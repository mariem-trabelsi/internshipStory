import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Interns } from '../model/intern.model';

@Injectable({
  providedIn: 'root'
})
export class InternsService {

  constructor(private httpClient:HttpClient) { }
  getInterns(){
    return this.httpClient.get<Interns[]>('http://localhost/internshipStory/php/afficheInterns.php');
    }

}
