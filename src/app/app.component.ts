import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isCollapsed: boolean = false;

  constructor() {}

  ngOnInit() {

  }

  expandApp() {
    this.isCollapsed = !this.isCollapsed;
  }
}
