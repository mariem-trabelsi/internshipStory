import { Component, OnInit } from '@angular/core';
import { Hire } from '../model/hire.model';
import { HiringService } from '../services/hiring.service';
import { InternsService } from '../services/interns.service';
@Component({
  selector: 'app-hiring',
  templateUrl: './hiring.component.html',
  styleUrls: ['./hiring.component.css']
})
export class HiringComponent implements OnInit {
hire = new Hire();

  constructor(private internService:InternsService,private Hservice:HiringService) { }

  ngOnInit(): void {
  }
  hiring(){
  console.log(this.hire);
  }

}
