import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: User[]= [
    {"username":"admin","password":"123","roles":['ADMIN']},
    {"username":"meriem","password":"ok","roles":['INTERN']},
    {"username":"neila","password":"00","roles":['HR']}
    ];
    
    public loggedUser : string | undefined;
    public isloggedIn:Boolean = false;
    public roles : string[] | undefined;

  constructor( private router:Router) {}

  SignIn(user:User): Boolean{
    let validUser: Boolean = false;
    this.users.forEach((curUser)=> {
      if(user.username === curUser.username && user.password === curUser.password ){
        validUser = true;
        this.loggedUser = String(curUser.username);
        this.roles = curUser.roles;
        this.isloggedIn = true;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
      }
    });
    return validUser;
  }
  
  isAdmin():Boolean {
  if(!this.roles) return false;
  return (this.roles.indexOf('ADMIN') > -1) ;
  }

  isHr():Boolean {
    if(!this.roles) return false;
    return (this.roles.indexOf('HR') > -1) ;
    }

  isIntern():Boolean {
      if(!this.roles) return false;
      return (this.roles.indexOf('INTERN') > -1) ;
      }

  logout(){
    this.loggedUser = undefined;
    this.isloggedIn = false;
    this.roles = undefined; 
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    this.router.navigate(['/log']);
  }

  setLoggedUserFromLS(username :string){
    this.loggedUser=username;
    this.isloggedIn=true;
    this.getRoles(username);
  }
  
  getRoles(username:string)
  {
    this.users.forEach((curUser)=>{
      if(username === curUser.username){
        this.roles=curUser.roles;
      }
    });

    
  }
}

