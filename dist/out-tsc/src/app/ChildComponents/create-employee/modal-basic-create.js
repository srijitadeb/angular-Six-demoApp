import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
var NgbdModalBasicCreate = /** @class */ (function () {
    function NgbdModalBasicCreate(modalService) {
        this.modalService = modalService;
    }
    NgbdModalBasicCreate.prototype.addEmp = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    NgbdModalBasicCreate.prototype.getDismissReason = function (reason) {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NgbdModalBasicCreate = tslib_1.__decorate([
        Component({
            selector: 'ngbd-modal-basic-create',
            templateUrl: './modal-basic-create.html'
        }),
        tslib_1.__metadata("design:paramtypes", [NgbModal])
    ], NgbdModalBasicCreate);
    return NgbdModalBasicCreate;
}());
export { NgbdModalBasicCreate };
//# sourceMappingURL=modal-basic-create.js.map