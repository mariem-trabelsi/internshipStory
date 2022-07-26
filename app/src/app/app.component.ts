import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InternsService } from './services/interns.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  
constructor(public internService:InternsService,private router:Router){}

ngOnInit(){
  let isloggedIn :string;
  let loggedUser :string;
  isloggedIn = String(localStorage.getItem('isloggedIn'));
  loggedUser = String(localStorage.getItem('loggedUser'));
  if(isloggedIn!="true")
  {
    this.router.navigate(['/home']);
  }
  else{
    this.internService.setLoggedUserFromLS(loggedUser);
  }
}
  
}
