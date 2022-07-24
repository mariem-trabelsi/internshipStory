import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import Hrs from '../model/hrs.model';


@Injectable({
  providedIn: 'root'
})
export class HrService {

  constructor(private httpClient:HttpClient) { }
  getHrs(){
    return this.httpClient.get<[Hrs]>('http://localhost/internshipStory/php/afficheHrs.php');
    }

}
