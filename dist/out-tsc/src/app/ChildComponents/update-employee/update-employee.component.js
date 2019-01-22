import * as tslib_1 from "tslib";
import { Component, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
var UpdateEmployeeComponent = /** @class */ (function () {
    function UpdateEmployeeComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.addEmployee = new EventEmitter(); // create new Emp
        this.show = false;
        this.buttonName = 'Show';
    }
    UpdateEmployeeComponent.prototype.toggle = function () {
        this.show = !this.show;
        // CHANGE THE NAME OF THE BUTTON.
        if (this.show)
            this.buttonName = "Hide";
        else
            this.buttonName = "Show";
    };
    UpdateEmployeeComponent.prototype.addEmp = function () {
        console.log("add");
        this.addEmployee.emit();
    };
    UpdateEmployeeComponent.prototype.ngOnInit = function () {
        console.log(this.updateEmployee);
        this.form = this._formBuilder.group({
            name: ['', [Validators.required]],
            age: ['', [Validators.required]],
            address: ['', [Validators.required]],
            email: ['', [Validators.required]],
            empId: ['', [Validators.required]]
        });
    };
    tslib_1.__decorate([
        Input('updateEmployee'),
        tslib_1.__metadata("design:type", Array)
    ], UpdateEmployeeComponent.prototype, "updateEmployee", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], UpdateEmployeeComponent.prototype, "addEmployee", void 0);
    UpdateEmployeeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-update-employee',
            templateUrl: './update-employee.component.html',
            styleUrls: ['./update-employee.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder])
    ], UpdateEmployeeComponent);
    return UpdateEmployeeComponent;
}());
export { UpdateEmployeeComponent };
//# sourceMappingURL=update-employee.component.js.map