import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
var DayComponent = /** @class */ (function () {
    function DayComponent() {
        this.date = new Date().toISOString().slice(0, 10);
    }
    DayComponent = tslib_1.__decorate([
        Component({
            selector: 'day-component',
            template: "\n                <div>\n                    <h4>Day Component</h4>\n                    <h5>{{ date }}</h5>\n                </div>\n    "
        })
    ], DayComponent);
    return DayComponent;
}());
export { DayComponent };
//# sourceMappingURL=dayComponent.js.map