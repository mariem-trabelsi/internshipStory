import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HRs} from '../model/hrs.model';


@Injectable({
  providedIn: 'root'
})
export class HrService {

  constructor(private httpClient:HttpClient) { }
  ListeHrs():Observable<HRs[]>{
    return this.httpClient.get<HRs[]>('http://localhost/internshipStory/php/afficheHrs.php');
  }

  
}
