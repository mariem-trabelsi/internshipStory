import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HRs } from '../model/hrs.model';
import { HrService } from '../services/hr.service';
import { InternsService } from '../services/interns.service';
@Component({
  selector: 'app-signin-hr',
  templateUrl: './signin-hr.component.html',
  styleUrls: ['./signin-hr.component.css']
})
export class SigninHrComponent implements OnInit {
  hr = new HRs();
  constructor(private formBuilder:FormBuilder,private hrService:HrService,private router:Router,private internService:InternsService) {
  }
  registerFrm!: FormGroup;
 ngOnInit(): void {
   this.registerFrm=this.formBuilder.group({
     nom:   ['',Validators.required],
     prenom:['',Validators.required],
     region:['',Validators.required],
     image: ['',Validators.required],
     pass:  ['',[Validators.required,Validators.minLength(4)]],
     mail:  ['',[Validators.required,Validators.maxLength(30)]],
     compa: ['',Validators.required],
   });
 }
 onSignIn(){
   if(!this.registerFrm.value.nom||!this.registerFrm.value.prenom||!this.registerFrm.value.mail||!this.registerFrm.value.pass||!this.registerFrm.value.region||!this.registerFrm.value.compa)
   {
     alert('Please fill in all the fields');
     this.router.navigate(['/SigninHrComponent']);
  }
    else
  {
   console.log(this.hr);
   this.hrService.insHr(this.hr).subscribe();
   this.internService.loggedUser = String(this.hr.email);
   this.internService.isloggedIn = true;
   localStorage.setItem('isloggedIn',String(this.internService.isloggedIn));
   localStorage.setItem('loggedUser', this.internService.loggedUser);
   localStorage.setItem('role',"HR");
   alert('welcome '+this.hr.fName +"!");
   }
}
}

