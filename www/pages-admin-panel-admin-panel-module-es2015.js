(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-panel-admin-panel-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/admin-panel/admin-panel.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/admin-panel/admin-panel.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>AdminPanel</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<ion-row>\r\n  <ion-col>\r\n    <h2>Welcome Admin</h2>\r\n  </ion-col>\r\n</ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/admin-panel/admin-panel.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/admin-panel/admin-panel.module.ts ***!
  \*********************************************************/
/*! exports provided: AdminPanelPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelPageModule", function() { return AdminPanelPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _admin_panel_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-panel.page */ "./src/app/pages/admin-panel/admin-panel.page.ts");







const routes = [
    {
        path: '',
        component: _admin_panel_page__WEBPACK_IMPORTED_MODULE_6__["AdminPanelPage"]
    }
];
let AdminPanelPageModule = class AdminPanelPageModule {
};
AdminPanelPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_admin_panel_page__WEBPACK_IMPORTED_MODULE_6__["AdminPanelPage"]]
    })
], AdminPanelPageModule);



/***/ }),

/***/ "./src/app/pages/admin-panel/admin-panel.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/admin-panel/admin-panel.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluLXBhbmVsL2FkbWluLXBhbmVsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/admin-panel/admin-panel.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/admin-panel/admin-panel.page.ts ***!
  \*******************************************************/
/*! exports provided: AdminPanelPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelPage", function() { return AdminPanelPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminPanelPage = class AdminPanelPage {
    constructor() { }
    ngOnInit() {
    }
};
AdminPanelPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'admin-panel',
        template: __webpack_require__(/*! raw-loader!./admin-panel.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/admin-panel/admin-panel.page.html"),
        styles: [__webpack_require__(/*! ./admin-panel.page.scss */ "./src/app/pages/admin-panel/admin-panel.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AdminPanelPage);



/***/ })

}]);
//# sourceMappingURL=pages-admin-panel-admin-panel-module-es2015.js.map