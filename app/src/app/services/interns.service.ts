import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Interns } from '../model/intern.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


const httpOptions={
  headers:new HttpHeaders({'content-Type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class InternsService {
  internsT:Interns[]=[];
  intern = new Interns();
  public loggedUser : string | undefined;
  public isloggedIn : Boolean = false;
  public roles      : string | undefined;

constructor(private httpClient:HttpClient,private router:Router)  { }

ListeInterns():Observable<Interns[]>{
  return this.httpClient.get<Interns[]>('http://localhost/internshipStory/php/afficheInterns.php');
}
deleteIntern(email:string){
  return this.httpClient.delete<Interns[]>('http://localhost/internshipStory/php/deleteInterns.php?INTERNMAIL='+ email);
}

insIntern(intrn:Interns)
{  
  return this.httpClient.get<Interns>('http://localhost/internshipStory/php/insIntern.php?region='+intrn.region+'&&nom='+intrn.lName+'&&image='+intrn.image+'&&prenom=' +intrn.fName+"&&email="+intrn.email+"&&psw="+intrn.password);
}

isAdmin():Boolean {
  if(localStorage.getItem('role') === "ADMIN")
      {return true;}
    return false;
    }

  isHr():Boolean {
    if(localStorage.getItem('role') ==="HR")
      {return true;}
    return false;
    }

  isIntern():Boolean {
    if(localStorage.getItem('role') ==="INTERN")
      {return true;}
    return false;
    }

  logout(){
    this.loggedUser = undefined;
    this.isloggedIn = false;
    this.roles      = undefined; 
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('role');
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    this.router.navigate(['/log']);
  }
  setLoggedUserFromLS( username :string){
    this.loggedUser = username;
    this.isloggedIn = true;
    this.internsT.forEach((curUser)=>{
      if( username  === curUser.email){
        this.roles  = curUser.role;
      }
    }); 
  }
  }

