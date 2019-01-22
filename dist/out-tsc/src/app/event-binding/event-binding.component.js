import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var EventBindingComponent = /** @class */ (function () {
    function EventBindingComponent() {
        this.isBeingEdited = false;
    }
    EventBindingComponent.prototype.onInputChange = function () {
        this.isBeingEdited = true;
    };
    EventBindingComponent.prototype.onFocusChange = function () {
        this.isBeingEdited = false;
    };
    EventBindingComponent.prototype.ngOnInit = function () {
    };
    EventBindingComponent = tslib_1.__decorate([
        Component({
            selector: 'app-event-binding',
            templateUrl: './event-binding.component.html',
            styleUrls: ['./event-binding.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], EventBindingComponent);
    return EventBindingComponent;
}());
export { EventBindingComponent };
//# sourceMappingURL=event-binding.component.js.map