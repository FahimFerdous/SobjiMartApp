(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-vegetable-inof-add-vegetable-inof-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/add-vegetable-inof/add-vegetable-inof.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/add-vegetable-inof/add-vegetable-inof.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/select-option-page\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Add Vegetable Info</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding speaker-detail\">\r\n  <div class=\"ion-text-center\">\r\n    <form novalidate>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-label>Select Location</ion-label>\r\n\r\n          <ion-select\r\n          #locationKey=\"ngModel\"\r\n          [(ngModel)]=\"addVegetableInof.locationKey\"\r\n          name=\"locationKey\"          \r\n          value=\"brown\"\r\n          okText=\"Okay\"\r\n          cancelText=\"Dismiss\"\r\n        >\r\n          <ion-select-option *ngFor=\"let location of locations\" [value]=\"location.key\">\r\n            {{ location.locationName }}\r\n          </ion-select-option>\r\n        </ion-select>\r\n\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Vegetable Name</ion-label>\r\n          <ion-input  #FruitName=\"ngModel\"  [(ngModel)]=\"addVegetableInof.vegetableName\" name=\"FruitName\" type=\"text\" required></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Unit Price </ion-label>\r\n          <ion-input #unitPrice=\"ngModel\"  [(ngModel)]=\"addVegetableInof.unitPrice\" name=\"UnitPrice\" type=\"number\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Minimum Order</ion-label>\r\n          <ion-input #minimumOrder=\"ngModel\"  [(ngModel)]=\"addVegetableInof.minimumOrder\" name=\"minimumOrder\" type=\"text\" required></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Market Price</ion-label>\r\n          <ion-input #marketPrice=\"ngModel\"  [(ngModel)]=\"addVegetableInof.marketPrice\" name=\"marketPrice\" type=\"text\" required></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">In Stock (kg)</ion-label>\r\n          <ion-input #inStock=\"ngModel\"  [(ngModel)]=\"addVegetableInof.stockamount\"  name=\"stockamount\" type=\"text\" required></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Fruit Image</ion-label>\r\n          <!-- <ion-input  (change)=\"uploadFile($event.target.files)\" type=\"file\"></ion-input> -->\r\n          <ion-input  (change)=\"uploadFile($event.target.files)\" type=\"file\"></ion-input>\r\n          <!-- <ion-input #union=\"ngModel\" [(ngModel)]=\"userInfo.union\" name=\"union\" type=\"text\" name=\"title\" required></ion-input> -->\r\n        </ion-item>\r\n      </ion-list>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button (click)=\"save(addVegetableInof)\" type=\"submit\" expand=\"block\">Submit</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/Model/AddVegetableInof.ts":
/*!***************************************!*\
  !*** ./src/Model/AddVegetableInof.ts ***!
  \***************************************/
/*! exports provided: AddVegetableInof */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVegetableInof", function() { return AddVegetableInof; });
class AddVegetableInof {
}


/***/ }),

/***/ "./src/app/pages/add-vegetable-inof/add-vegetable-inof.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/add-vegetable-inof/add-vegetable-inof.module.ts ***!
  \***********************************************************************/
/*! exports provided: AddVegetableInofPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVegetableInofPageModule", function() { return AddVegetableInofPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_vegetable_inof_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-vegetable-inof.page */ "./src/app/pages/add-vegetable-inof/add-vegetable-inof.page.ts");







const routes = [
    {
        path: '',
        component: _add_vegetable_inof_page__WEBPACK_IMPORTED_MODULE_6__["AddVegetableInofPage"]
    }
];
let AddVegetableInofPageModule = class AddVegetableInofPageModule {
};
AddVegetableInofPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_add_vegetable_inof_page__WEBPACK_IMPORTED_MODULE_6__["AddVegetableInofPage"]]
    })
], AddVegetableInofPageModule);



/***/ }),

/***/ "./src/app/pages/add-vegetable-inof/add-vegetable-inof.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/add-vegetable-inof/add-vegetable-inof.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC12ZWdldGFibGUtaW5vZi9hZGQtdmVnZXRhYmxlLWlub2YucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/add-vegetable-inof/add-vegetable-inof.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/add-vegetable-inof/add-vegetable-inof.page.ts ***!
  \*********************************************************************/
/*! exports provided: AddVegetableInofPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVegetableInofPage", function() { return AddVegetableInofPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Model_AddVegetableInof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Model/AddVegetableInof */ "./src/Model/AddVegetableInof.ts");
/* harmony import */ var _services_add_vegetable_inof_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/add-vegetable-inof.service */ "./src/app/services/add-vegetable-inof.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_input_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/input-location.service */ "./src/app/services/input-location.service.ts");






let AddVegetableInofPage = class AddVegetableInofPage {
    constructor(locationService, addVegetableInofService, toastController) {
        this.locationService = locationService;
        this.addVegetableInofService = addVegetableInofService;
        this.toastController = toastController;
        this.addVegetableInof = new _Model_AddVegetableInof__WEBPACK_IMPORTED_MODULE_2__["AddVegetableInof"]();
        this.locations = [];
    }
    ngOnInit() {
        const allLocationInfos = this.locationService.getAllLocation()
            .snapshotChanges()
            .pipe()
            .subscribe(s => {
            this.locations = [];
            s.forEach(element => {
                var y = element.payload.toJSON();
                y["key"] = element.key;
                this.locations.push(y);
            });
            console.log(this.locations);
        });
    }
    save(addVegetableInof) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            addVegetableInof.entryDate = new Date().getTime();
            addVegetableInof.vegetableFile = this.addVegetableInof.vegetableFile;
            yield this.addVegetableInofService.startUpLoad(addVegetableInof);
            // this.router.navigate(['/vegetable-list']);
        });
    }
    uploadFile(event) {
        console.log('event', event);
        this.selectedFilesForImage = event;
        console.log('f', this.selectedFilesForImage);
        this.addVegetableInof.vegetableFile = this.selectedFilesForImage.item(0);
    }
};
AddVegetableInofPage.ctorParameters = () => [
    { type: _services_input_location_service__WEBPACK_IMPORTED_MODULE_5__["InputLocationService"] },
    { type: _services_add_vegetable_inof_service__WEBPACK_IMPORTED_MODULE_3__["AddVegetableInofService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
AddVegetableInofPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'add-vegetable-inof',
        template: __webpack_require__(/*! raw-loader!./add-vegetable-inof.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/add-vegetable-inof/add-vegetable-inof.page.html"),
        styles: [__webpack_require__(/*! ./add-vegetable-inof.page.scss */ "./src/app/pages/add-vegetable-inof/add-vegetable-inof.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_input_location_service__WEBPACK_IMPORTED_MODULE_5__["InputLocationService"], _services_add_vegetable_inof_service__WEBPACK_IMPORTED_MODULE_3__["AddVegetableInofService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
], AddVegetableInofPage);



/***/ })

}]);
//# sourceMappingURL=pages-add-vegetable-inof-add-vegetable-inof-module-es2015.js.map