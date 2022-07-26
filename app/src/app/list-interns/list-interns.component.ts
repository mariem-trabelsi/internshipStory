import { Component, OnInit } from '@angular/core';
import { InternsService } from '../services/interns.service';
import { Interns } from '../model/intern.model';
@Component({
  selector: 'app-list-interns',
  templateUrl: './list-interns.component.html',
  styleUrls: ['./list-interns.component.css']
})
export class ListInternsComponent implements OnInit {

  constructor(private internService:InternsService) { }
  InternsTable: Interns[] | undefined;

  ngOnInit()
  {
    this.internService.ListeInterns().
      subscribe((data:Interns[])=>{
      this.InternsTable = data;
      console.log(this.InternsTable);
      
    });
  }
  }


