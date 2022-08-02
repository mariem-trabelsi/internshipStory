import { HrService } from '../services/hr.service';
import { Component, OnInit } from '@angular/core';
import { HRs } from '../model/hrs.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-hrs',
  templateUrl: './list-hrs.component.html',
  styleUrls: ['./list-hrs.component.css']
})
export class ListHrsComponent implements OnInit {
  HrsTable: HRs[] | undefined;
  
  constructor(public router:Router,private hrService:HrService) { }
  ngOnInit()
  {
    this.hrService.ListeHrs().
      subscribe((data:HRs[])=>{
      this.HrsTable = data;
      this.HrsTable = this.HrsTable.filter(hr => hr.role !== String('ADMIN'))
    });
  }
  
  supprimer(hr:HRs){
    if(confirm('Are you sure ?')){
    this.hrService.deleteHr(hr.email).subscribe((data) =>{
    this.HrsTable = this.HrsTable?.filter(u => u !== hr);
     this.router.navigate(['listHRs']).then(()=>{
      window.location.reload();
    });
   });
  }
  }
}

