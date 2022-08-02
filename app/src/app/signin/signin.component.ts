import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Interns } from '../model/intern.model';
import { InternsService } from '../services/interns.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  intrn = new Interns();
  constructor(private formBuilder:FormBuilder,private internService:InternsService,private router:Router) {
   }
   registerForm!: FormGroup;
  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      nom:   ['',Validators.required],
      prenom:['',Validators.required],
      region:['',Validators.required],
      image: ['',Validators.required],
      pass:  ['',[Validators.required,Validators.minLength(5)]],
      mail:  ['',[Validators.required,Validators.maxLength(30)]]
    });
  }
  onSignIn(){
    if(!this.registerForm.value.nom||
    !this.registerForm.value.prenom||
    !this.registerForm.value.mail||
    !this.registerForm.value.pass||
    !this.registerForm.value.region)
    {
      alert('Please fill in all the fields');
    }
    else
    {
    this.internService.insIntern(this.intrn).subscribe();
    this.internService.loggedUser = String(this.intrn.email);
    this.internService.roles      = "INTERN";
    this.internService.isloggedIn = true;
    localStorage.setItem('isloggedIn',String(this.internService.isloggedIn));
    localStorage.setItem('loggedUser', this.internService.loggedUser);
    localStorage.setItem('role',this.internService.roles);
    alert('welcome '+this.intrn.fName +"!");
    this.router.navigate(['home']).then(()=>{
      window.location.reload();  
    });
    }

}
}
