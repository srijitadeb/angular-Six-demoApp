import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-component',
  templateUrl: './day-component.component.html',
  styleUrls: ['./day-component.component.css']
})
export class DayComponentComponent implements OnInit {

  date: string = new Date().toISOString().slice(0, 10);

  constructor() { }

  ngOnInit() {
  }

}
