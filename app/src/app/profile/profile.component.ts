import { Component, OnInit } from '@angular/core';
import { HRs } from '../model/hrs.model';
import { Interns } from '../model/intern.model';
import { HrService } from '../services/hr.service';
import { InternsService } from '../services/interns.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  InternsTable:Interns[]=[];
  HrsTable:HRs[]=[];
  // public biog:string='';
  // public Newbiog:string='';
  // public NewbioT:string[]=[];
  public image:String='';
  public nom:string='';
  public prenom:string='';
  public region:string='';
 
  constructor(public internService:InternsService,public hrService:HrService) { }

  ngOnInit(): void {
      this.internService.ListeInterns().
        subscribe((data:Interns[])=>{
        this.InternsTable = data;
        //console.log(this.InternsTable);
        if(this.internService.isloggedIn){
          this.InternsTable.forEach((current)=>{
          if( this.internService.loggedUser === current.email){
            this.image  = current.image;
            this.nom     = current.lName;
            this.prenom  = current.fName;
            this.region = current.region;
          }
        }); 
      }
    });
      
    this.hrService.ListeHrs().
        subscribe((data:HRs[])=>{
        this.HrsTable = data;
        //console.log(this.InternsTable);
        if(this.internService.isloggedIn){
          this.HrsTable.forEach((current)=>{
          if( this.internService.loggedUser === current.email){
            this.image  = current.image;
            this.nom     = current.lName;
            this.prenom  = current.fName;
            this.region = current.local;
          }
        }); 
      }
    });
    }
 
    // bio(){
    //    this.Newbiog =this.biog;
    //    this.biog='';
    //    this.NewbioT.pop();
    //    this.NewbioT?.push(this.Newbiog);
    //    alert(this.NewbioT[0]);
    // } 
}
