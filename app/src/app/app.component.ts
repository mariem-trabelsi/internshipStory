import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  
constructor(public authService :AuthService,private router:Router){}

ngOnInit(){
  let isloggedIn :string;
  let loggedUser :string;
  isloggedIn =String(localStorage.getItem('isloggedIn'));
  loggedUser = String(localStorage.getItem('loggedUser'));
  if( isloggedIn!="true" || !loggedUser)
  {
    this.router.navigate(['/home']);
  }
  else{
    this.authService.setLoggedUserFromLS(loggedUser);
  }
}
  
}
