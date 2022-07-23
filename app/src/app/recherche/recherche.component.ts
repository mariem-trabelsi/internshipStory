import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  
  constructor() { }
  Icon ="far fa-thumbs-up";
  Count= 4;
  ngOnInit(): void {
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
