(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-location-add-location-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/add-location/add-location.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/add-location/add-location.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/select-option-page\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Enter a Location</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding speaker-detail\">\r\n  <div class=\"ion-text-center\">\r\n    <form novalidate>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-input\r\n            name=\"location\"\r\n            clearInput\r\n            placeholder=\"Location Name\"\r\n          ></ion-input>\r\n        </ion-item>\r\n      </ion-list>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button type=\"submit\" expand=\"block\">Submit</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/add-location/add-location.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/add-location/add-location.module.ts ***!
  \***********************************************************/
/*! exports provided: AddLocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLocationPageModule", function() { return AddLocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-location.page */ "./src/app/pages/add-location/add-location.page.ts");







var routes = [
    {
        path: '',
        component: _add_location_page__WEBPACK_IMPORTED_MODULE_6__["AddLocationPage"]
    }
];
var AddLocationPageModule = /** @class */ (function () {
    function AddLocationPageModule() {
    }
    AddLocationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_location_page__WEBPACK_IMPORTED_MODULE_6__["AddLocationPage"]]
        })
    ], AddLocationPageModule);
    return AddLocationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/add-location/add-location.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/add-location/add-location.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1sb2NhdGlvbi9hZGQtbG9jYXRpb24ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/add-location/add-location.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/add-location/add-location.page.ts ***!
  \*********************************************************/
/*! exports provided: AddLocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLocationPage", function() { return AddLocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddLocationPage = /** @class */ (function () {
    function AddLocationPage() {
    }
    AddLocationPage.prototype.ngOnInit = function () {
    };
    AddLocationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-location',
            template: __webpack_require__(/*! raw-loader!./add-location.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/add-location/add-location.page.html"),
            styles: [__webpack_require__(/*! ./add-location.page.scss */ "./src/app/pages/add-location/add-location.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddLocationPage);
    return AddLocationPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-add-location-add-location-module-es5.js.map