import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDetailsService } from '../service/car-details.service';
var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(route, 
    //private CarDetailsService:CarDetailsService,
    router, _CarDetailsService) {
        this.route = route;
        this.router = router;
        this._CarDetailsService = _CarDetailsService;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var index = this.route.snapshot.paramMap.get('index');
        this._CarDetailsService.getCardetails().subscribe(function (data) {
            console.log('data------', _this.registeredCarDetail = data);
            _this.car = _this.registeredCarDetail[index];
            console.log('data-1-----', _this.car);
        });
    };
    DetailsComponent.prototype.goBack = function () {
        this.router.navigate(['home']);
    };
    DetailsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-details',
            templateUrl: './details.component.html',
            styleUrls: ['./details.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            Router,
            CarDetailsService])
    ], DetailsComponent);
    return DetailsComponent;
}());
export { DetailsComponent };
//# sourceMappingURL=details.component.js.map