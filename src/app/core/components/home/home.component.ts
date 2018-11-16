import { AppSettings } from './../../../shared/app-settings.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  firstName: string;
  constructor() { }

  ngOnInit() {
    this.firstName = AppSettings.firstName;
  }

  

}
