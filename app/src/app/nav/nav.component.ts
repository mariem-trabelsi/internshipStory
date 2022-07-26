import { Component, OnInit } from '@angular/core';
import { InternsService } from '../services/interns.service';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public internService :InternsService){}

  ngOnInit(){}
  }


