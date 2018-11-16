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

  toggleApp() {
    this.isCollapsed = !this.isCollapsed;
  }

  expandApp() {
    this.isCollapsed = true;
  }
  collapseApp() {
    this.isCollapsed = false;
  }
}
