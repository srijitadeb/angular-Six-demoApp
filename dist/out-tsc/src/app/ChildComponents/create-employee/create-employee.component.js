import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
//import { EventEmitter } from 'events';
var CreateEmployeeComponent = /** @class */ (function () {
    function CreateEmployeeComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.addEmployee = new EventEmitter(); // create new Emp
        this.show = false;
        this.buttonName = 'Show';
    }
    CreateEmployeeComponent.prototype.ngOnInit = function () {
        console.log(this.updateEmployee);
        this.form = this._formBuilder.group({
            name: ['', [Validators.required]],
            age: ['', [Validators.required]],
            address: ['', [Validators.required]],
            email: ['', [Validators.required]],
            empId: ['', [Validators.required]]
        });
    };
    CreateEmployeeComponent.prototype.toggle = function () {
        this.show = !this.show;
        // CHANGE THE NAME OF THE BUTTON.
        if (this.show)
            this.buttonName = "Hide";
        else
            this.buttonName = "Show";
    };
    CreateEmployeeComponent.prototype.addEmp = function () {
        console.log("add", this.form.value);
        this.addEmployee.emit(this.form.value);
    };
    tslib_1.__decorate([
        Input('employee'),
        tslib_1.__metadata("design:type", Array)
    ], CreateEmployeeComponent.prototype, "employeeList", void 0);
    tslib_1.__decorate([
        Input('updateEmployee'),
        tslib_1.__metadata("design:type", Array)
    ], CreateEmployeeComponent.prototype, "updateEmployee", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], CreateEmployeeComponent.prototype, "addEmployee", void 0);
    CreateEmployeeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-create-employee',
            templateUrl: './create-employee.component.html',
            styleUrls: ['./create-employee.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder])
    ], CreateEmployeeComponent);
    return CreateEmployeeComponent;
}());
export { CreateEmployeeComponent };
//# sourceMappingURL=create-employee.component.js.map