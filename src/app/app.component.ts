import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-intro';
  routes = [
{ linkName: 'Home', url: 'home'},
{ linkName: 'Settings', url: 'settings'}
  ];
  constructor() {
    }
  }
