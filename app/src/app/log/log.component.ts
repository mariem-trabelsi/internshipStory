import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
 user = new User();
 erreur=0;
  constructor(private authService: AuthService,private router :Router) { }

  ngOnInit(): void {}

onLoggedin(){
  console.log(this.user);
  let isValidUser: Boolean = this.authService.SignIn(this.user);
  if(isValidUser)
  {
    this.router.navigate(['/']);
  }
  else
  {
    //alert('oouups wrong login/password! ');
    this.erreur=1;
  }
}
}
