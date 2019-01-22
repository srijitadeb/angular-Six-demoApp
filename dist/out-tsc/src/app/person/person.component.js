import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
//import {Person} from '../interfaces/person'
var PersonComponent = /** @class */ (function () {
    function PersonComponent() {
        this.persons = [
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
        ];
    }
    PersonComponent.prototype.ShowGraduatePersons = function () {
        this.persons = this.persons.filter(function (Person) { return Person.isGraduate; });
    };
    PersonComponent.prototype.ngOnInit = function () {
    };
    PersonComponent = tslib_1.__decorate([
        Component({
            selector: 'app-person',
            templateUrl: './person.component.html',
            styleUrls: ['./person.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], PersonComponent);
    return PersonComponent;
}());
export { PersonComponent };
//# sourceMappingURL=person.component.js.map