import { Component, OnInit } from '@angular/core';
import { InternsService } from '../services/interns.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor(public internService:InternsService) { }
  ngOnInit(): void {}
quit(){
  this.internService.logout();
 }
}
