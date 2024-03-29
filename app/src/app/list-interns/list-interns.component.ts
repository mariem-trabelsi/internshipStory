import { Component, OnInit } from '@angular/core';
import { InternsService } from '../services/interns.service';
import { Interns } from '../model/intern.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-interns',
  templateUrl: './list-interns.component.html',
  styleUrls: ['./list-interns.component.css']
})
export class ListInternsComponent implements OnInit {

  constructor(private internService:InternsService,private router:Router) { }
  InternsTable: Interns[] | undefined;

  ngOnInit()
  {
    this.internService.ListeInterns().
      subscribe((data:Interns[])=>{
      this.InternsTable = data;
      console.log(this.InternsTable);
      
    });
  }
 

  supprimer(intern:Interns){
    if (confirm("Are you sure ? "))
  { 
    this.internService.deleteIntern(intern.email).subscribe((data) =>{
    this.InternsTable = this.InternsTable?.filter(u => u !== intern);
    this.router.navigate(['listInterns']).then(()=>{
      window.location.reload();  
    });
    });
  }
  }
}

