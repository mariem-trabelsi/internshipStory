import { Component, OnInit } from '@angular/core';
import { Hire } from '../model/hire.model';
import { HiringService } from '../services/hiring.service';
import { Interns } from '../model/intern.model';
import { Router } from '@angular/router';
import { HrService } from '../services/hr.service';
import { HRs } from '../model/hrs.model';
import { InternsService } from '../services/interns.service';
@Component({
  selector: 'app-hiring',
  templateUrl: './hiring.component.html',
  styleUrls: ['./hiring.component.css']
})
export class HiringComponent implements OnInit {
hire = new Hire();
HrTable: HRs[]=[];

  constructor(private router:Router,private hrService:HrService,private Hservice:HiringService,private intern:InternsService) { }

  ngOnInit(): void {
    this.hrService.ListeHrs().
    subscribe((data:HRs[])=>{
    this.HrTable = data;
    });
    console.log(this.HrTable);
  }

  hiring(){
    const username      = this.intern.loggedUser;
    this.hire.likes     = String(0);
    this.HrTable.forEach((curUser)=>{
      if(username       === curUser.email){
        this.hire.name  = curUser.fName+' '+curUser.lName;
        this.hire.image = curUser.image;
        this.hire.email = curUser.email;
        this.Hservice.addToHire(this.hire).subscribe();
      }
    });
    console.log(this.hire);
    this.router.navigate(['hiring']).then(()=>{
     window.location.reload();  
    });
  }
  }

