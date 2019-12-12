(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-fruits-info-add-fruits-info-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/add-fruits-info/add-fruits-info.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/add-fruits-info/add-fruits-info.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/select-option-page\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Add Fruit Info</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding speaker-detail\">\r\n  <div class=\"ion-text-center\">\r\n    <form novalidate>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-label>Select Location</ion-label>\r\n\r\n          <ion-select\r\n          #locationKey=\"ngModel\"\r\n          [(ngModel)]=\"fruitsInfo.locationKey\"\r\n          name=\"locationKey\"          \r\n          value=\"brown\"\r\n          okText=\"Okay\"\r\n          cancelText=\"Dismiss\"\r\n        >\r\n          <ion-select-option *ngFor=\"let location of locations\" [value]=\"location.key\">\r\n            {{ location.locationName }}\r\n          </ion-select-option>\r\n        </ion-select>\r\n\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Fruit Name</ion-label>\r\n          <ion-input  #FruitName=\"ngModel\"  [(ngModel)]=\"fruitsInfo.fruitsName\" name=\"FruitName\" type=\"text\" required></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Unit Price </ion-label>\r\n          <ion-input #unitPrice=\"ngModel\"  [(ngModel)]=\"fruitsInfo.unitPrice\" name=\"UnitPrice\" type=\"number\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Minimum Order</ion-label>\r\n          <ion-input #minimumOrder=\"ngModel\"  [(ngModel)]=\"fruitsInfo.minimumOrder\" name=\"minimumOrder\" type=\"text\" required></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Market Price</ion-label>\r\n          <ion-input #marketPrice=\"ngModel\"  [(ngModel)]=\"fruitsInfo.marketPrice\" name=\"marketPrice\" type=\"text\" required></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">In Stock (kg)</ion-label>\r\n          <ion-input #inStock=\"ngModel\"  [(ngModel)]=\"fruitsInfo.inStock\"  name=\"inStock\" type=\"text\" required></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Fruit Image</ion-label>\r\n          <!-- <ion-input  (change)=\"uploadFile($event.target.files)\" type=\"file\"></ion-input> -->\r\n          <ion-input  (change)=\"uploadFile($event.target.files)\" type=\"file\"></ion-input>\r\n          <!-- <ion-input #union=\"ngModel\" [(ngModel)]=\"userInfo.union\" name=\"union\" type=\"text\" name=\"title\" required></ion-input> -->\r\n        </ion-item>\r\n      </ion-list>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button (click)=\"save(fruitsInfo)\" type=\"submit\" expand=\"block\">Submit</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/Model/fruitsInfo.ts":
/*!*********************************!*\
  !*** ./src/Model/fruitsInfo.ts ***!
  \*********************************/
/*! exports provided: fruitsInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fruitsInfo", function() { return fruitsInfo; });
var fruitsInfo = /** @class */ (function () {
    function fruitsInfo() {
    }
    return fruitsInfo;
}());



/***/ }),

/***/ "./src/app/pages/add-fruits-info/add-fruits-info.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/add-fruits-info/add-fruits-info.module.ts ***!
  \*****************************************************************/
/*! exports provided: AddFruitsInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFruitsInfoPageModule", function() { return AddFruitsInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_fruits_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-fruits-info.page */ "./src/app/pages/add-fruits-info/add-fruits-info.page.ts");







var routes = [
    {
        path: '',
        component: _add_fruits_info_page__WEBPACK_IMPORTED_MODULE_6__["AddFruitsInfoPage"]
    }
];
var AddFruitsInfoPageModule = /** @class */ (function () {
    function AddFruitsInfoPageModule() {
    }
    AddFruitsInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_fruits_info_page__WEBPACK_IMPORTED_MODULE_6__["AddFruitsInfoPage"]]
        })
    ], AddFruitsInfoPageModule);
    return AddFruitsInfoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/add-fruits-info/add-fruits-info.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/add-fruits-info/add-fruits-info.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1mcnVpdHMtaW5mby9hZGQtZnJ1aXRzLWluZm8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/add-fruits-info/add-fruits-info.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/add-fruits-info/add-fruits-info.page.ts ***!
  \***************************************************************/
/*! exports provided: AddFruitsInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFruitsInfoPage", function() { return AddFruitsInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_input_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/input-location.service */ "./src/app/services/input-location.service.ts");
/* harmony import */ var _Model_fruitsInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Model/fruitsInfo */ "./src/Model/fruitsInfo.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_fruits_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/fruits-info.service */ "./src/app/services/fruits-info.service.ts");






var AddFruitsInfoPage = /** @class */ (function () {
    function AddFruitsInfoPage(locationService, router, fruitsInfoService) {
        this.locationService = locationService;
        this.router = router;
        this.fruitsInfoService = fruitsInfoService;
        this.locations = [];
        this.fruitsInfo = new _Model_fruitsInfo__WEBPACK_IMPORTED_MODULE_3__["fruitsInfo"]();
    }
    AddFruitsInfoPage.prototype.ngOnInit = function () {
        var _this = this;
        var allLocationInfos = this.locationService.getAllLocation()
            .snapshotChanges()
            .pipe()
            .subscribe(function (s) {
            _this.locations = [];
            s.forEach(function (element) {
                var y = element.payload.toJSON();
                y["key"] = element.key;
                _this.locations.push(y);
            });
        });
    };
    AddFruitsInfoPage.prototype.save = function (fruitsInfo) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fruitsInfo.entryDate = new Date().getTime();
                        fruitsInfo.fruitImageFile = this.fruitsInfo.fruitImageFile;
                        return [4 /*yield*/, this.fruitsInfoService.startUpLoad(fruitsInfo)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddFruitsInfoPage.prototype.uploadFile = function (event) {
        console.log('event', event);
        this.selectedFilesForImage = event;
        console.log('f', this.selectedFilesForImage);
        this.fruitsInfo.fruitImageFile = this.selectedFilesForImage.item(0);
    };
    AddFruitsInfoPage.ctorParameters = function () { return [
        { type: _services_input_location_service__WEBPACK_IMPORTED_MODULE_2__["InputLocationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_fruits_info_service__WEBPACK_IMPORTED_MODULE_5__["FruitsInfoService"] }
    ]; };
    AddFruitsInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-fruits-info',
            template: __webpack_require__(/*! raw-loader!./add-fruits-info.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/add-fruits-info/add-fruits-info.page.html"),
            styles: [__webpack_require__(/*! ./add-fruits-info.page.scss */ "./src/app/pages/add-fruits-info/add-fruits-info.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_input_location_service__WEBPACK_IMPORTED_MODULE_2__["InputLocationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_fruits_info_service__WEBPACK_IMPORTED_MODULE_5__["FruitsInfoService"]])
    ], AddFruitsInfoPage);
    return AddFruitsInfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-add-fruits-info-add-fruits-info-module-es5.js.map