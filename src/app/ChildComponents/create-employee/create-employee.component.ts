import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  @Input() addEmployee :number;
  @Input() updateEmployee: number;
  


  constructor() {}

  ngOnInit() {
  }

}
