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
  intern =new Interns();
  public loggedUser : string | undefined;
  public isloggedIn : Boolean = false;
  public roles      : string | undefined;
  // public image:String='';
  // public nom:string='';
  // public prenom:string='';
  // public region:string='';
constructor(private httpClient:HttpClient,private router:Router)  { }



ListeInterns():Observable<Interns[]>{
  return this.httpClient.get<Interns[]>('http://localhost/internshipStory/php/afficheInterns.php');
}

isAdmin():Boolean {
  if(localStorage.getItem('role') ==="ADMIN")
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
  
  // getDataCurrentUser():void
  // {
  //   if(this.isloggedIn){
  //     this.internsT.forEach((current)=>{
  //       if( this.loggedUser === current.email){
  //         alert('oui');
  //         this.image  =current.image;
  //         this.nom    =current.lName;
  //         this.prenom =current.fName;
  //         this.region =current.region;
  //         console.log(this.internsT);
  //       }
  //       else alert('noo');
  //     }); 
  //   }
  // }
     
    
  }

