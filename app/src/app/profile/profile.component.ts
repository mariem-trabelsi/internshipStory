import { Component, OnInit } from '@angular/core';
import { Interns } from '../model/intern.model';
import { InternsService } from '../services/interns.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  InternsTable:Interns[]=[];
  public image1:String='';
  public nom:string='';
  public prenom:string='';
  public region1:string='';
  constructor(public internService:InternsService) { }

  ngOnInit(): void {
      this.internService.ListeInterns().
        subscribe((data:Interns[])=>{
        this.InternsTable = data;
        console.log(this.InternsTable);
      });
      if(this.internService.isloggedIn){
          this.InternsTable.forEach((current)=>{
          if( this.internService.loggedUser === current.email){
            this.image1  = current.image;
            console.log(this.image1);
            this.nom     =current.lName;
            this.prenom  =current.fName;
            this.region1 =current.region;
          }
        }); 
      }
  }
  
  
}
