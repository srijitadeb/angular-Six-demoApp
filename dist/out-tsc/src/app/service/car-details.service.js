import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var CarDetailsService = /** @class */ (function () {
    function CarDetailsService(http) {
        this.http = http;
        this._url = "/assets/data/cars.json";
    }
    CarDetailsService.prototype.getCardetails = function () {
        return this.http.get(this._url);
    };
    CarDetailsService.prototype.addNew = function (car) {
        var _this = this;
        //this._carList.push(car);
        this._CarDetailsService.getCardetails()
            .subscribe(function (data) { return _this._carList = data; });
        console.log("car is ", this._carList);
    };
    CarDetailsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], CarDetailsService);
    return CarDetailsService;
}());
export { CarDetailsService };
//# sourceMappingURL=car-details.service.js.map