import { Component, OnInit } from '@angular/core';
import { Hire } from '../model/hire.model';
import { HRs } from '../model/hrs.model';
import { Interns } from '../model/intern.model';
import { Stories } from '../model/story.model';
import { HiringService } from '../services/hiring.service';
import { HrService } from '../services/hr.service';
import { InternsService } from '../services/interns.service';
import { StoryService } from '../services/story.service';
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
  public image   :String='';
  public nom     :string='';
  public prenom  :string='';
  public region  :string='';
  public fonction:string="";
  storyT :Stories[]=[];
  storyT2:Stories[]=[];
  HireTable:Hire[]=[];
  icon   ="far fa-heart";
  count  =2;
  bool=false;
  constructor(public storyService:StoryService,public internService:InternsService,public hrService:HrService,private hService:HiringService) { }

  ngOnInit(): void {
      this.internService.ListeInterns().
        subscribe((data:Interns[])=>{
        this.InternsTable = data;
        if(this.internService.isloggedIn){
          this.InternsTable.forEach((current)=>{
          if( this.internService.loggedUser === current.email){
            this.image  = current.image;
            this.nom    = current.lName;
            this.prenom = current.fName;
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
            this.nom    = current.lName;
            this.prenom = current.fName;
            this.region = current.local;
            this.fonction= "HR at "+current.compName;
          }
        }); 
      }
    });
    this.storyService.ListeStory().
      subscribe((data:Stories[])=>{
      this.storyT      = data;
      this.storyT.forEach((current)=>{
      if(current.email == String(this.internService.loggedUser)){
      this.storyT2.push(current);
      }
      });
      console.log(this.storyT2);
    });
    this.hService.ListeToHire().
    subscribe((data:Hire[])=>{
    this.HireTable = data;
      this.HireTable.forEach((current)=>{
      if( this.internService.loggedUser === current.email){
       this.bool=true;
      }
    }); 
});

    }

    addLike(){
      if(this.icon =='far fa-heart'){
      this.icon ="fas fa-heart";
      this.count++;}
      else {
      this.icon = "far fa-heart";
      this.count--;
      }
    }
 
    // bio(){
    //    this.Newbiog =this.biog;
    //    this.biog='';
    //    this.NewbioT.pop();
    //    this.NewbioT?.push(this.Newbiog);
    //    alert(this.NewbioT[0]);
    // } 
}
