import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  isBeingEdited = false;
  
  onInputChange() {
    this.isBeingEdited = true;
  }

  onFocusChange() {
    this.isBeingEdited = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
