import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent() {
        this.employeeList = [
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
    }
    //create new emp 
    EmployeeListComponent.prototype.newEmployee = function (event) {
        console.log('New employee in parent component');
        this.employeeList.push(event);
    };
    EmployeeListComponent.prototype.ngOnInit = function () {
    };
    EmployeeListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-employee-list',
            templateUrl: './employee-list.component.html',
            styleUrls: ['./employee-list.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
export { EmployeeListComponent };
//# sourceMappingURL=employee-list.component.js.map