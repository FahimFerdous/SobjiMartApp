(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-vegetable-list-vegetable-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/vegetable-list/vegetable-list.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/vegetable-list/vegetable-list.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/select-option-page\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"float: left;\">Vegetables</ion-title>\r\n    <ion-icon\r\n      style=\"float: right; font-size: 25px; margin-right: 5%;\"\r\n      name=\"cart\"\r\n    ></ion-icon>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-searchbar  #q\r\n    [showCancelButton]=\"true\"\r\n    (keyup)=\"filter(q.value)\">\r\n    </ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid fixed  *ngFor=\"let vegetable of filteredVegetables\">\r\n    <ion-card>\r\n      <ion-row class=\"ion-align-items-stretch\">\r\n        <ion-col size=\"4\">\r\n          <img\r\n           [src]=\"vegetable.vegetableImageUrl\"\r\n            alt=\"\"\r\n            style=\"height: 75px; width: 140px; margin-top: 15px;\"\r\n          />\r\n        </ion-col>\r\n        <ion-col size=\"8\">\r\n          <p\r\n            style=\"margin-top: 0px;\r\n              font-size: 22px; margin-bottom: -5px;\"\r\n          >\r\n            {{vegetable.vegetableName}}\r\n          </p>\r\n          <ion-item style=\"margin-left: -16px;\">\r\n            <ion-select\r\n              placeholder=\"Select value\"\r\n              style=\"padding: 0; font-size: 14px;\"\r\n            >\r\n              <ion-select-option value=\"brown\">Tk 50 - 500gm</ion-select-option>\r\n              <ion-select-option value=\"blonde\">Tk 100 - 1kg</ion-select-option>\r\n              <ion-select-option value=\"black\">Tk 200 - 3kg</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <p style=\"float: left; font-weight: 500;\">Tk.{{vegetable.marketPrice}}</p>\r\n          <ion-button\r\n            color=\"primary\"\r\n            style=\"margin-left: 30%;\r\n              height: 29px;\r\n              margin-top: 10px;\"\r\n            >Add Item</ion-button\r\n          >\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n   \r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<!-- <ion-content>\r\n  <ion-grid fixed>\r\n    <ion-row class=\"ion-align-items-stretch\">\r\n      <ion-col size=\"12\" size-md=\"6\" >\r\n        <ion-card class=\"speaker-card\">\r\n          <ion-card-header>\r\n            <ion-item detail=\"false\" lines=\"none\" routerLink=\"/app/tabs/speakers\">\r\n              <ion-avatar slot=\"start\">\r\n                <img src=\"assets/img/food.jpg\" alt=\"\">\r\n              </ion-avatar>\r\n              Pic\r\n            </ion-item>\r\n          </ion-card-header>\r\n\r\n          <ion-card-content>\r\n            <ion-list>\r\n              <ion-item  routerLink=\"/app/tabs/speakers\">\r\n                <h3>Name</h3>\r\n              </ion-item>\r\n\r\n              <ion-item routerLink=\"/app/tabs/speakers\">\r\n                <h3>About </h3>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card-content>\r\n\r\n          <ion-row class=\"ion-no-padding ion-justify-content-center\">\r\n            <ion-col size=\"4\" class=\"ion-text-left\">\r\n              <ion-button fill=\"clear\" size=\"small\" color=\"primary\" >\r\n                <ion-icon name=\"logo-twitter\" slot=\"start\"></ion-icon>\r\n                Tweet\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col size=\"4\" class=\"ion-text-center\">\r\n              <ion-button fill=\"clear\" size=\"small\" color=\"primary\" >\r\n                <ion-icon name=\"share-alt\" slot=\"start\"></ion-icon>\r\n                Share\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col size=\"4\" class=\"ion-text-right\">\r\n              <ion-button fill=\"clear\" size=\"small\" color=\"primary\" >\r\n                <ion-icon name=\"chatboxes\" slot=\"start\"></ion-icon>\r\n                Contact\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content> -->\r\n"

/***/ }),

/***/ "./src/app/pages/vegetable-list/vegetable-list.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/vegetable-list/vegetable-list.module.ts ***!
  \***************************************************************/
/*! exports provided: VegetableListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VegetableListPageModule", function() { return VegetableListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vegetable_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vegetable-list.page */ "./src/app/pages/vegetable-list/vegetable-list.page.ts");







var routes = [
    {
        path: '',
        component: _vegetable_list_page__WEBPACK_IMPORTED_MODULE_6__["VegetableListPage"]
    }
];
var VegetableListPageModule = /** @class */ (function () {
    function VegetableListPageModule() {
    }
    VegetableListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_vegetable_list_page__WEBPACK_IMPORTED_MODULE_6__["VegetableListPage"]]
        })
    ], VegetableListPageModule);
    return VegetableListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/vegetable-list/vegetable-list.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/vegetable-list/vegetable-list.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlZ2V0YWJsZS1saXN0L3ZlZ2V0YWJsZS1saXN0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/vegetable-list/vegetable-list.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/vegetable-list/vegetable-list.page.ts ***!
  \*************************************************************/
/*! exports provided: VegetableListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VegetableListPage", function() { return VegetableListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_add_vegetable_inof_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/add-vegetable-inof.service */ "./src/app/services/add-vegetable-inof.service.ts");



var VegetableListPage = /** @class */ (function () {
    function VegetableListPage(vegetableInfoService) {
        this.vegetableInfoService = vegetableInfoService;
        this.vegetables = [];
        this.filteredVegetables = [];
    }
    VegetableListPage.prototype.ngOnInit = function () {
        var _this = this;
        var allVegetableInfos = this.vegetableInfoService.getaddVegetableInof()
            .snapshotChanges()
            .pipe()
            .subscribe(function (s) {
            _this.vegetables = [];
            s.forEach(function (element) {
                var y = element.payload.toJSON();
                y["key"] = element.key;
                _this.vegetables.push(y);
            });
            _this.filteredVegetables = _this.vegetables;
        });
    };
    VegetableListPage.prototype.filter = function (query) {
        console.log(query);
        var filteredProducts = (query) ?
            this.vegetables.filter(function (p) { return p.vegetableName.toLowerCase()
                .includes(query.toLowerCase()); }) :
            this.vegetables;
        this.filteredVegetables = filteredProducts;
        console.log(this.filteredVegetables);
    };
    VegetableListPage.ctorParameters = function () { return [
        { type: _services_add_vegetable_inof_service__WEBPACK_IMPORTED_MODULE_2__["AddVegetableInofService"] }
    ]; };
    VegetableListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vegetable-list',
            template: __webpack_require__(/*! raw-loader!./vegetable-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/vegetable-list/vegetable-list.page.html"),
            styles: [__webpack_require__(/*! ./vegetable-list.page.scss */ "./src/app/pages/vegetable-list/vegetable-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_add_vegetable_inof_service__WEBPACK_IMPORTED_MODULE_2__["AddVegetableInofService"]])
    ], VegetableListPage);
    return VegetableListPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-vegetable-list-vegetable-list-module-es5.js.map