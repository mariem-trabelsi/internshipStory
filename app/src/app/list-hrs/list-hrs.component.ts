import { HrService } from '../services/hr.service';
import { Component, OnInit } from '@angular/core';
import {HRs} from '../model/hrs.model';
@Component({
  selector: 'app-list-hrs',
  templateUrl: './list-hrs.component.html',
  styleUrls: ['./list-hrs.component.css']
})
export class ListHrsComponent implements OnInit {
  HrsTable: HRs[] | undefined;
  
  constructor(private hrService:HrService) { }
  ngOnInit()
  {
    this.hrService.ListeHrs().
      subscribe((data:HRs[])=>{
      this.HrsTable = data;
      
      console.log(this.HrsTable);
      
    });
  }
  }


