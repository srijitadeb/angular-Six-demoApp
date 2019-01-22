import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var DayComponentComponent = /** @class */ (function () {
    function DayComponentComponent() {
        this.date = new Date().toISOString().slice(0, 10);
    }
    DayComponentComponent.prototype.ngOnInit = function () {
    };
    DayComponentComponent = tslib_1.__decorate([
        Component({
            selector: 'app-day-component',
            templateUrl: './day-component.component.html',
            styleUrls: ['./day-component.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], DayComponentComponent);
    return DayComponentComponent;
}());
export { DayComponentComponent };
//# sourceMappingURL=day-component.component.js.map