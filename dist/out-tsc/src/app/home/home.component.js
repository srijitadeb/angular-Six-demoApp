import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CarDetailsService } from '../service/car-details.service';
import { AddCarComponent } from '../add-car/add-car.component';
import { MatDialog } from '@angular/material';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(dialog, _CarDetailsService) {
        this.dialog = dialog;
        this._CarDetailsService = _CarDetailsService;
        this.isPopupOpened = true;
        this.registeredCarDetail = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._CarDetailsService.getCardetails()
            .subscribe(function (data) { return _this.registeredCarDetail = data; });
    };
    HomeComponent.prototype.addNew = function () {
        var _this = this;
        console.log("add");
        this.isPopupOpened = true;
        var dialogRef = this.dialog.open(AddCarComponent, {
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.isPopupOpened = false;
            console.log('The dialog was closed');
            //this.animal = result;
        });
    };
    HomeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [MatDialog,
            CarDetailsService])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map