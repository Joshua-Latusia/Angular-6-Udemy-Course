import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDetails = false;

  logMessages = [];

  constructor() {}

  toggleDisplayDetails() {
    this.showDetails = !this.showDetails;
    this.logMessages.push('Current unix time is :' + Date.now());
  }
}
