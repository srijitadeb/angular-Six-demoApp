import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList:Employee[] = [
    {
      name: "Ajay Sharma",
      age: 23,
      address: "Mumbai",
      email: 'ajay.sharma@gmail.com',
      empId: 6001
    },
    {
      name: "Sumit Kumar",
      age: 25,
      address: "Nagpur",
      email: 'sumit.kumar@gmail.com',
      empId: 6002
    },
    {
      name: "Alok Shah",
      age: 24,
      address: "Bangalore",
      email: 'alok.shh@gmail.com',
      empId: 6003
    },
    {
      name: "Amit Patil",
      age: 26,
      address: "Pune",
      email: 'amit.patil@gmail.com',
      empId: 6004
    }
  ];

 
  //create new emp 
  newEmployee(event: any){
    console.log('New employee in parent component');
    this.employeeList.push(event);
  }
  constructor() { }

  ngOnInit() {
  }

}
