import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-component',
  templateUrl: './welcome-component.component.html',
  styleUrls: ['./welcome-component.component.css']
})
export class WelcomeComponentComponent implements OnInit {
  tarining_name:string = 'Angular training'
  constructor() { }

  ngOnInit() {
  }

}
