import { Component, OnInit } from '@angular/core';
import { Hire } from '../model/hire.model';
import { Interns } from '../model/intern.model';
import { HiringService } from '../services/hiring.service';
import { InternsService } from '../services/interns.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  hireT:Hire[]=[];
  InternsTable:Interns[]=[];
  imaage:string = "";
  comment       = false;


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

  constructor(private hiringS:HiringService,private internService:InternsService) { }
  Icon ="far fa-thumbs-up";
  Count= 4;
  ngOnInit(): void {
  this.hiringS.ListeToHire().
  subscribe((data:Hire[])=>{
    this.hireT = data;
    console.log(this.hireT);
  });
  this.internService.ListeInterns().
    subscribe((data:Interns[])=>{
    this.InternsTable = data;
    this.InternsTable.forEach((curUser)=>{
      if(this.internService.loggedUser === curUser.email){
        this.imaage = curUser.image;
      }
    });
})
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


}
