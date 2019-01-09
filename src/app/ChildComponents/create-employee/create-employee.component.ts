import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  @Input('employee') employeeList: any[];
  @Input('updateEmployee') updateEmployee: any[]; // edit emp
  @Output() addEmployee = new EventEmitter<any>(); // create new Emp

  form:FormGroup; 
  public show:boolean = false;
  public buttonName:any = 'Show';

  constructor(
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    console.log(this.updateEmployee);
    this.form = this._formBuilder.group({
      name: ['',[Validators.required]],
      age: ['',[Validators.required]],
      address: ['',[Validators.required]],
      email: ['',[Validators.required]],
      empId: ['',[Validators.required]]
    });
  }

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }


  addEmp(){
    console.log("add", this.form.value);
    this.addEmployee.emit(this.form.value);
  }

}
