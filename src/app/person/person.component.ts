import { Component, OnInit } from '@angular/core';
//import {Person} from '../interfaces/person'

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  persons:Person[]= [
    {
      name: 'Mr. A',
      age: 18,
      address: 'Koramangala',
      email: 'a@gmail.com',
      isGraduate: false

    },
    {
      name: 'Mr. B',
      age: 24,
      address: 'Koramangala',
      email: 'b@gmail.com',
      isGraduate: true

    },
    {
      name: 'Mr. C',
      age: 23,
      address: 'Koramangala',
      email: 'c@gmail.com',
      isGraduate: true

    },
    {
      name: 'Mr. D',
      age: 18,
      address: 'Koramangala',
      email: 'd@gmail.com',
      isGraduate: false

    },
    {
      name: 'Mr. E',
      age: 29,
      address: 'Koramangala',
      email: 'e@gmail.com',
      isGraduate: true

    }
  ]
  ShowGraduatePersons(){
    this.persons = this.persons.filter((Person) => Person.isGraduate)
  }

  constructor() { }

  ngOnInit() {
  }

}
