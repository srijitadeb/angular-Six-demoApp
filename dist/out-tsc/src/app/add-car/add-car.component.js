import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CarDetailsService } from '../service/car-details.service';
var AddCarComponent = /** @class */ (function () {
    function AddCarComponent(_formBuilder, dialogRef, _CarDetailsService, data) {
        this._formBuilder = _formBuilder;
        this.dialogRef = dialogRef;
        this._CarDetailsService = _CarDetailsService;
        this.data = data;
    }
    AddCarComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddCarComponent.prototype.ngOnInit = function () {
        this._newCarRegistrationForm = this._formBuilder.group({
            model: [this.data.model, [Validators.required]],
            modelYr: [this.data.modelYr, [Validators.required]],
            engineCapacity: [this.data.engineCapacity, [Validators.required]],
            color: [this.data.color, [Validators.required]],
            transmissionMode: [this.data.transmissionMode, [Validators.required]],
            carType: [this.data.carType, [Validators.required]],
            price: [this.data.price, [Validators.required]],
            carModel: [this.data.carModel, [Validators.required]]
        });
    };
    AddCarComponent.prototype.onSubmit = function () {
        console.log("add new", this._newCarRegistrationForm.value);
        this._CarDetailsService.addNew(this._newCarRegistrationForm.value);
        this.dialogRef.close();
    };
    AddCarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-car',
            templateUrl: './add-car.component.html',
            styleUrls: ['./add-car.component.css']
        }),
        tslib_1.__param(3, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            MatDialogRef,
            CarDetailsService, Object])
    ], AddCarComponent);
    return AddCarComponent;
}());
export { AddCarComponent };
//# sourceMappingURL=add-car.component.js.map