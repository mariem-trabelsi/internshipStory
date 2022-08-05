import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commentaire} from '../model/comment.model';
import { Hire } from '../model/hire.model';
import { Interns } from '../model/intern.model';
import { CmtService } from '../services/cmt.service';
import { HiringService } from '../services/hiring.service';
import { InternsService } from '../services/interns.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  hireT:Hire[]=[];
  hireT2:Hire[]=[];
  InternsTable:Interns[]=[];
  imaageCurrent:string = "";
  noomCurrent:string = "";
  comment       = false;
  hire=new Hire();
  cmtre = new Commentaire();
  cmtsTable :Commentaire[]=[];
  intellAffichage=false;
  ct:string="";

  commentf():boolean{
    if(this.comment)
    {
      this.comment=false
    }
    else{
      this.comment=true;
    }
    return this.comment;
  }

  constructor(private router:Router,private hiringS:HiringService,private internService:InternsService,public cmtSer:CmtService) { }
  Icon ="far fa-thumbs-up";
  Count= 4;
  ngOnInit(): void {
  this.hiringS.ListeToHire().
  subscribe((data:Hire[])=>{
    this.hireT = data;
    console.log(this.hireT);
    this.InternsTable.forEach((curUser)=>{
      if(this.internService.loggedUser === curUser.email){
        this.imaageCurrent = curUser.image;
        this.noomCurrent=curUser.fName+' '+curUser.lName;
      }
    });

  });
  this.internService.ListeInterns().
    subscribe((data:Interns[])=>{
    this.InternsTable = data;
    this.InternsTable.forEach((curUser)=>{
      if(this.internService.loggedUser === curUser.email){
        this.imaageCurrent = curUser.image;
        this.noomCurrent =curUser.fName+' '+curUser.lName;
      }
    });
})
this.cmtSer.ListeComment().subscribe((data:Commentaire[])=>{
  this.cmtsTable = data;
  console.log(this.cmtsTable);
  });

}

  Like(){
    if(this.Icon =='far fa-thumbs-up'){
    this.Icon= "fas fa-thumbs-up";
    this.Count++;
  }
    else {
    this.Icon = "fas fa-thumbs-up";
    this.Count--;
    }
  }

  getRegion(){
    this.intellAffichage=true;
    this.hiringS.ListeToHireFiltred(this.hire).subscribe((data:Hire[])=>{
      this.hireT2 = data;
      console.log(this.hireT2);
    });
  }

  ajoutComment(h:Hire){
    this.cmtre.image=this.imaageCurrent;
    this.cmtre.name=this.noomCurrent;
    this.cmtre.Id2=h.Id;
    this.cmtre.contenu =this.ct;
    console.log(this.cmtre);
    this.cmtSer.insertComment(this.cmtre).subscribe();
    this.router.navigate(['recherche']).then( ()=>{
      window.location.reload();
    })
  }
  


}
