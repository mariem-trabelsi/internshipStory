import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hire } from '../model/hire.model';
import { HRs } from '../model/hrs.model';
import { Interns } from '../model/intern.model';
import { Stories } from '../model/story.model';
import { HiringService } from '../services/hiring.service';
import { HrService } from '../services/hr.service';
import { InternsService } from '../services/interns.service';
import { StoryService } from '../services/story.service';
import { CmtService } from '../services/cmt.service';
import { Commentaire } from '../model/comment.model';
import {HttpClient } from '@angular/common/http';
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
  HireTable:Hire[] =[];
  HireTable2:Hire[] =[];

  cmtre = new Commentaire();
  cmtsTable :Commentaire[]=[];
  Icon   ="far fa-thumbs-up";
  icon  ="far fa-heart";
  Count  = 2;
  bool   = false;
  comment= false;
  intrn=new Interns();
  hr=new HRs();

  clickForUpdating=0;
  httpClient: any;
  
  constructor(private http :HttpClient,public cmtSer:CmtService ,public router:Router,public storyService:StoryService,public internService:InternsService,public hrService:HrService,private hService:HiringService) { }

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
        this.HireTable2.push(current);
        this.bool=true;
      }
    }); 
});
this.cmtSer.ListeComment().subscribe((data:Commentaire[])=>{
  this.cmtsTable = data;
  console.log(this.cmtsTable);
  });
}

    addLike(){
      if(this.icon =='far fa-heart'){
      this.icon ="fas fa-heart";
      this.Count++;}
      else {
      this.icon = "far fa-heart";
      this.Count--;
      }
    }

    Like(){
      if(this.Icon =='far fa-thumbs-up'){
      this.Icon="fas fa-thumbs-up";
      this.Count++;
    }
      else {
      this.Icon = "far fa-thumbs-up";
      this.Count--;
      }
    }

    commentF():boolean{
     
      if(this.comment)
      {
        this.comment=false
       
      }
      else
      {
        this.comment=true;
      }
      return this.comment;
    }
 
    // bio(){
    //    this.Newbiog =this.biog;
    //    this.biog='';
    //    this.NewbioT.pop();
    //    this.NewbioT?.push(this.Newbiog);
    //    alert(this.NewbioT[0]);
    // } 

    suppSt(st:Stories){
      if (confirm("Are you sure to delete this item? "))
  { 
    this.storyService.suppStory(st).subscribe((data) =>{
    this.storyT2 = this.storyT2.filter(u => u !== st);
    this.router.navigate(['profile']).then(()=>{
      window.location.reload();  
    });
    });
  }
  }

  supphiring(h:Hire){
    
    if (confirm("Are you sure to delete this item ? "))
{ 
  this.hService.suppHiring(h).subscribe((data) =>{
  this.HireTable2 = this.HireTable2.filter(u => u !== h);
  this.router.navigate(['profile']).then(()=>{
    window.location.reload();  
  });
  });
}
}



  getId(str:Stories){
    
    if(str.icon=="far fa-heart"){
    this.storyService.updateStoryPlus(str).subscribe();
    // str.whoClicks.push(String(localStorage.getItem('loggedUser')));
    
     }
     if(str.icon=="fas fa-heart"){
      this.storyService.updateStoryMoins(str).subscribe();
    }
    this.router.navigate(['profile']).then(()=>{
      window.location.reload();  
    });
  }

maj(){
  if(this.clickForUpdating == 0)
  this.clickForUpdating=1;
  else
  this.clickForUpdating=0;

}

  getId1(h:Hire){
    if(h.icon == "far fa-thumbs-up"){
    this.hService.updatePlus(h).subscribe();
  
     }
     if(h.icon == "fas fa-thumbs-up"){
      this.hService.updateMoins(h).subscribe();
    }
    this.router.navigate(['profile']).then(()=>{
      window.location.reload();  
    });
  }

  upIntern(intrn:Interns)
{  
  this.internService.upIntern(intrn).subscribe();
  this.router.navigate(['profile']).then(()=>{
    window.location.reload();  
})


}
}