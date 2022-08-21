import { Component, OnInit } from '@angular/core';
import { InternsService } from '../services/interns.service';
import { Stories } from '../model/story.model';
import { StoryService } from '../services/story.service';
import { Interns } from '../model/intern.model';
import { Router} from '@angular/router';
import { clickerS } from '../model/clickerS.model';
import { ClicksService } from '../services/clickStory.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  disAbled= true;
  story   = new Stories();
  storyT:Stories[]=[];
  cliST:clickerS[]=[];
  InternsTable: Interns[]=[];
  constructor(private clSerc:ClicksService,private router:Router,public internService:InternsService,public storyService:StoryService) { }

  ngOnInit()
  {
    this.internService.ListeInterns().
    subscribe((data:Interns[])=>{
    this.InternsTable = data;
    });
    this.storyService.ListeStory().
      subscribe((data:Stories[])=>{
      this.storyT = data;
      console.log(this.storyT);
    });
  }

 activeButton():Boolean{
  if (this.internService.isloggedIn)
  {
    this.disAbled = false;
  }
  return this.disAbled;
 }



  ajouter(){
    const username       = this.internService.loggedUser;
    this.story.likes     = String(0);
    this.InternsTable.forEach((curUser)=>{
      if(username        === curUser.email){
        this.story.name  = curUser.fName+' '+curUser.lName;
        this.story.image = curUser.image;
        this.story.email = curUser.email;
        this.storyService.ajoutStory(this.story).subscribe();
      }
    });
    this.router.navigate(['story']).then(()=>{
      window.location.reload();  
    });
  }
 

  
  // ajoutClick(c:clickerS){
  //   c.Id=this.story.Id;
  //   c.email=String(localStorage.getItem('loggedUser'));
  //   console.log(c)
  //this.clSerc.addWhoCliks(c).subscribe();
  // }

  //  whoClicks():Boolean{
//   if (this.internService.isloggedIn)
//   {this.disAbled = false;}
//   return this.disAbled;
//  }


whoClicks(s:Stories){
  this.clSerc.afficheClickerStory(s).
  subscribe((data:clickerS[])=>{
    this.cliST = data;
    if (this.cliST[0].email != localStorage.getItem('loggedUser')){
      alert('coeur vide '); 
      //je dois itérer le tableau
    }
  });
}


  getId(str:Stories){
    if(str.icon == "far fa-heart"){
    this.storyService.updateStoryPlus(str).subscribe();
    str.icon = "fas fa-heart";
    console.log(String(localStorage.getItem('loggedUser')));
     }
     if(str.icon == "fas fa-heart"){
      this.storyService.updateStoryMoins(str).subscribe();
      str.icon = "far fa-heart";
    }
    this.router.navigate(['story']).then(()=>{
      window.location.reload();  
    });
  }
}
