import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  constructor(private formBuilder:FormBuilder) {
   }
   registerForm!: FormGroup;
  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      nom:['',Validators.required],
      prenom:['',Validators.required],
      region:['',Validators.required],
      image:['',Validators.required],
      pass:['',[Validators.required,Validators.minLength(5)]],
      mail:['',[Validators.required,Validators.maxLength(30)]]
    });
  }
  onSubmit(){
    if(!this.registerForm) {
      console.log('no');
    }
    else{
  console.log(this.registerForm.value) ;
  }
}
}