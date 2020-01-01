(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-select-option-page-select-option-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/select-option-page/select-option-page.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/select-option-page/select-option-page.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <!-- <ion-menu-button></ion-menu-button> -->\r\n      \r\n      <ion-back-button defaultHref=\"/app/tabs/schedule\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Shop Category</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"outer-content \">\r\n  <ion-list>\r\n    <ion-grid fixed>\r\n      <ion-row class=\"ion-align-items-stretch\">\r\n        <ion-col size=\"12\" size-md=\"6\">\r\n          <ion-card class=\"speaker-card\">\r\n            <ion-card-header class=\"list-design\">\r\n              <ion-item\r\n                detail=\"false\"\r\n                lines=\"none\"\r\n                routerLink=\"/vegetable-list\"\r\n              >\r\n                <b>Vegetables</b>\r\n              </ion-item>\r\n            </ion-card-header>\r\n\r\n            <ion-card-content>\r\n              <a routerLink=\"/vegetable-list\"\r\n                ><img\r\n                  src=\"assets/img/vegetables.jpg\"\r\n                  alt=\"image\"\r\n                  style=\"height: 130px;\"\r\n              /></a>\r\n            </ion-card-content>\r\n          </ion-card>\r\n          <ion-card class=\"speaker-card\">\r\n            <ion-card-header class=\"list-design\">\r\n              <ion-item detail=\"false\" lines=\"none\" routerLink=\"/fruit-list\">\r\n                <b>Fruits</b>\r\n              </ion-item>\r\n            </ion-card-header>\r\n\r\n            <ion-card-content>\r\n              <a routerLink=\"/fruit-list\"\r\n                ><img\r\n                  src=\"assets/img/mixed-fruits.jpg\"\r\n                  alt=\"image\"\r\n                  style=\"height: 130px;\"\r\n              /></a>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/select-option-page/select-option-page.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/select-option-page/select-option-page.module.ts ***!
  \***********************************************************************/
/*! exports provided: SelectOptionPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectOptionPagePageModule", function() { return SelectOptionPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _select_option_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-option-page.page */ "./src/app/pages/select-option-page/select-option-page.page.ts");







const routes = [
    {
        path: '',
        component: _select_option_page_page__WEBPACK_IMPORTED_MODULE_6__["SelectOptionPagePage"]
    }
];
let SelectOptionPagePageModule = class SelectOptionPagePageModule {
};
SelectOptionPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_select_option_page_page__WEBPACK_IMPORTED_MODULE_6__["SelectOptionPagePage"]]
    })
], SelectOptionPagePageModule);



/***/ }),

/***/ "./src/app/pages/select-option-page/select-option-page.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/select-option-page/select-option-page.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-design {\n  margin-top: -15px;\n  margin-left: -25px;\n  margin-bottom: -15px;\n}\n\n.bg-image {\n  background-image: url(\"/assets/img/food.jpg\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VsZWN0LW9wdGlvbi1wYWdlL0M6XFxVc2Vyc1xcVXNlclxcRG9jdW1lbnRzXFxQcmFjdGlzZUZpbGVcXFNvYmppTWFydEFwcC9zcmNcXGFwcFxccGFnZXNcXHNlbGVjdC1vcHRpb24tcGFnZVxcc2VsZWN0LW9wdGlvbi1wYWdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2VsZWN0LW9wdGlvbi1wYWdlL3NlbGVjdC1vcHRpb24tcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLDZDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZWxlY3Qtb3B0aW9uLXBhZ2Uvc2VsZWN0LW9wdGlvbi1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWRlc2lnbiB7XHJcbiAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IC0xNXB4O1xyXG59XHJcblxyXG4uYmctaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2Zvb2QuanBnXCIpO1xyXG59XHJcbiIsIi5saXN0LWRlc2lnbiB7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xuICBtYXJnaW4tbGVmdDogLTI1cHg7XG4gIG1hcmdpbi1ib3R0b206IC0xNXB4O1xufVxuXG4uYmctaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9mb29kLmpwZ1wiKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/select-option-page/select-option-page.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/select-option-page/select-option-page.page.ts ***!
  \*********************************************************************/
/*! exports provided: SelectOptionPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectOptionPagePage", function() { return SelectOptionPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SelectOptionPagePage = class SelectOptionPagePage {
    constructor() { }
    ngOnInit() {
    }
};
SelectOptionPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'select-option-page',
        template: __webpack_require__(/*! raw-loader!./select-option-page.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/select-option-page/select-option-page.page.html"),
        styles: [__webpack_require__(/*! ./select-option-page.page.scss */ "./src/app/pages/select-option-page/select-option-page.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SelectOptionPagePage);



/***/ })

}]);
//# sourceMappingURL=pages-select-option-page-select-option-page-module-es2015.js.map