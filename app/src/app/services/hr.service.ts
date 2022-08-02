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

  deleteHr(email:string){
    return this.httpClient.delete<HRs[]>('http://localhost/internshipStory/php/deleteHrs.php?EMAIL='+ email);
  }

  insHr(hr:HRs)
{  
  return this.httpClient.get<HRs>('http://localhost/internshipStory/php/insHr.php?region='+hr.local+'&&nom='+hr.lName+'&&image='+hr.image+'&&prenom=' +hr.fName+"&&email="+hr.email+"&&psw="+hr.password+"&&loca="+hr.compName);
}
}
