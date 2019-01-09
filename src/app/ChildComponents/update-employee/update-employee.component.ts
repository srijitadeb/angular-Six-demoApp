import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  form:FormGroup; 
  @Input('updateEmployee') updateEmployee: any[]; // edit emp
  @Output() addEmployee = new EventEmitter<any>(); // create new Emp

  public show:boolean = false;
  public buttonName:any = 'Show';
  

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  addEmp(){
    console.log("add");
    this.addEmployee.emit();
  }
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

}
