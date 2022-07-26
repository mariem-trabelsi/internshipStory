import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InternsService } from '../services/interns.service';
import { Interns } from '../model/intern.model';
import { HrService } from '../services/hr.service';
import { HRs } from '../model/hrs.model';


@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit  {
 hr = new HRs();
 intrn  = new Interns();
 erreur = 0;
 internsT :Interns[]=[];
 HrsTable:HRs[]=[];

 
constructor(private internService:InternsService,private router :Router,private hrService:HrService) { }

ngOnInit(): void {
  this.internService.ListeInterns().subscribe(intern =>{
   this.internsT=intern;
   console.log(this.internsT);})
   this.hrService.ListeHrs().
      subscribe((data:HRs[])=>{
      this.HrsTable = data;
      console.log(this.HrsTable)})
}
  
  

Verify(intrn:Interns): Boolean{
  console.log(this.intrn);
  let validUser: Boolean = false;
  if(!this.internsT){
    console.log('c\'est vide !');
  }else{
    this.internsT.forEach((curintern)=> {
    if( intrn.email === curintern.email && intrn.password === curintern.password ){
      validUser = true;
      this.internService.loggedUser = String(curintern.email);
      this.internService.roles =curintern.role;
      this.internService.isloggedIn=true;
      localStorage.setItem('isloggedIn',String(this.internService.isloggedIn));
      localStorage.setItem('loggedUser', this.internService.loggedUser);
      localStorage.setItem('role',this.internService.roles);
    }
  });}
  return validUser;
}

onLoggedin(){
  let isValidUser: Boolean = this.Verify(this.intrn);
  if(isValidUser)
  {
    this.router.navigate(['/']);
  }
  else
  {
    this.erreur=1;
  }
}
 
onLoggedinHr(){
  let isValidUser: Boolean = this.VerifyHr(this.hr);
  if(isValidUser)
  {
    this.router.navigate(['/']);
  }
  else
  {
    this.erreur=1;
  }
}
VerifyHr(hr:HRs): Boolean{
  console.log(this.hr);
  let validUser: Boolean = false;
  if(!this.HrsTable){
    console.log('c\'est vide !');
  }else{
    this.HrsTable.forEach((curintern)=> {
    if(hr.email === curintern.email && this.hr.password === curintern.password ){
      validUser = true;
      this.internService.loggedUser = String(curintern.email);
      this.internService.roles = curintern.role;
      this.internService.isloggedIn = true;
      localStorage.setItem('loggedUser', this.internService.loggedUser);
      localStorage.setItem('role',String(this.internService.roles));
      localStorage.setItem('isloggedIn', String(this.internService.isloggedIn));
    }
  });}
  return validUser;
}
}


