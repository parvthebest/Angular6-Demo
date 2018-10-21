(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- The content below is only a placeholder and can be replaced.\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n -->\n<div style=\"width:30%;margin: auto \">\n  <h3 style=\"width:50%;margin: auto;font-style: oblique\">Enter Details</h3>\n  <br>\n  <form>\n    <div class=\"form-group row\">\n      <label for=\"staticEmail\" class=\"col-sm-5 col-form-label\">Id</label>\n      <div class=\"col-sm-7\">\n        <input type=\"text\" class=\"form-control-plaintext\" id=\"staticEmail\" value=\"Id\" [(ngModel)]=\"id\" name=\"Id\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"staticEmail1\" class=\"col-sm-5 col-form-label\">Name</label>\n      <div class=\"col-sm-7\">\n        <input type=\"text\" class=\"form-control-plaintext\" id=\"staticEmail1\" value=\"Name\" [(ngModel)]=\"name\" name=\"Name\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"staticEmail2\" class=\"col-sm-5 col-form-label\">Phone Number</label>\n      <div class=\"col-sm-7\">\n        <input type=\"text\" class=\"form-control-plaintext\" id=\"staticEmail2\" value=\"Phone Number\" [(ngModel)]=\"phoneNumber\" name=\"Phone Number\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"staticEmail3\" class=\"col-sm-5 col-form-label\">Address</label>\n      <div class=\"col-sm-7\">\n        <input type=\"text\" class=\"form-control-plaintext\" id=\"staticEmail3\" value=\"Address\" [(ngModel)]=\"address\" name=\"Address\">\n      </div>\n    </div>\n  </form>\n  <br>\n  <div style=\"width:60%;margin: auto \">\n    <button (click)=\"addRow()\" *ngIf=\"!isEdit\" class=\"btn btn-dark\">Add</button>\n    <button style=\"margin: 5px\" (click)=\"editRow()\" *ngIf=\"isEdit\" class=\"btn btn-dark\">Save</button>\n    <button (click)=\"isEdit=false\" *ngIf=\"isEdit\" class=\"btn btn-dark\">Cancel</button>\n  </div>\n</div>\n<br>\n<div style=\"text-align:center\">\n  <table class=\"table table-bordered\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">Id</th>\n        <th scope=\"col\">Name</th>\n        <th scope=\"col\">Phone Number</th>\n        <th scope=\"col\">Address</th>\n        <th scope=\"col\" colspan=\"3\">Operations</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor='let sample of Samples'>\n        <th scope=\"row\">{{sample.id}}</th>\n        <td>\n          <div style=\"min-width: 182px;\">{{sample.name}}</div>\n          <!-- <input *ngIf=\"sample.editMode\" style=\"height: auto;width: auto;margin: 0px;padding: 0px\" type=\"text\" [(ngModel)]=\"sample.name\" /> -->\n        </td>\n        <td>{{sample.phoneNumber}}</td>\n        <td>{{sample.address}}</td>\n        <td>\n          <div style=\"min-width: 150px;\">\n            <button class=\"btn btn-dark\" (click)=\"onEdit(sample)\">Edit</button>\n            <!-- <button style=\"margin: 5px\" class=\"btn btn-dark\" *ngIf=\"sample.editMode\" (click)=\"onEdit(sample)\">Save</button>\n            <button class=\"btn btn-dark\" *ngIf=\"sample.editMode\" (click)=\"sample.editMode=false;\">Cancel</button> -->\n          </div>\n        </td>\n        <td><button class=\"btn btn-dark\" (click)=\"onDetails(sample)\">Details</button></td>\n        <td><button class=\"btn btn-dark\" (click)=\"onDelete(sample)\">Delete</button></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<div *ngIf=\"isDetail\">\n   <h2>{{Sample.name}} Details</h2>\n   <ul>\n     <li>\n       Id : {{Sample.id}}\n     </li>\n     <li>\n        Name : {{Sample.name}}\n      </li>\n      <li>\n        Address : {{Sample.address}}\n      </li>\n   </ul>\n</div>test change"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sample__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sample */ "./src/app/sample.ts");
/* harmony import */ var _mock_sample__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-sample */ "./src/app/mock-sample.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'crud';
        this.Samples = [];
        this.Samples = _mock_sample__WEBPACK_IMPORTED_MODULE_2__["Samples"];
        this.isEdit = false;
    }
    AppComponent.prototype.addRow = function () {
        this.Samples.push({ id: this.id, name: this.name, phoneNumber: this.phoneNumber, address: this.address });
    };
    AppComponent.prototype.onDelete = function (sample) {
        var index = this.Samples.indexOf(sample);
        this.Samples.splice(index, 1);
        if (this.Sample != null)
            if (sample.id == this.Sample.id)
                this.isDetail = false;
    };
    AppComponent.prototype.onDetails = function (sample) {
        // this.id=sample.id;
        // this.name=sample.name;
        // this.phoneNumber=sample.phoneNumber;
        // this.address=sample.address;
        this.Sample = new _sample__WEBPACK_IMPORTED_MODULE_1__["Sample"]();
        this.Sample = sample;
        this.isDetail = true;
    };
    AppComponent.prototype.onEdit = function (sample) {
        //sample.editMode = true;
        this.id = sample.id;
        this.name = sample.name;
        this.phoneNumber = sample.phoneNumber;
        this.address = sample.address;
        this.SampleEdit = new _sample__WEBPACK_IMPORTED_MODULE_1__["Sample"]();
        this.SampleEdit = sample;
        this.isEdit = true;
    };
    AppComponent.prototype.editRow = function () {
        this.SampleEdit.id = this.id;
        this.SampleEdit.name = this.name;
        this.SampleEdit.phoneNumber = this.phoneNumber;
        this.SampleEdit.address = this.address;
        var index = this.Samples.indexOf(this.SampleEdit);
        this.Samples.splice(index, 1, this.SampleEdit);
        this.isEdit = false;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _first_first_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./first/first.component */ "./src/app/first/first.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _first_first_component__WEBPACK_IMPORTED_MODULE_4__["FirstComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/first/first.component.css":
/*!*******************************************!*\
  !*** ./src/app/first/first.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/first/first.component.html":
/*!********************************************!*\
  !*** ./src/app/first/first.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  first works!\n</p>\n"

/***/ }),

/***/ "./src/app/first/first.component.ts":
/*!******************************************!*\
  !*** ./src/app/first/first.component.ts ***!
  \******************************************/
/*! exports provided: FirstComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstComponent", function() { return FirstComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FirstComponent = /** @class */ (function () {
    function FirstComponent() {
    }
    FirstComponent.prototype.ngOnInit = function () {
    };
    FirstComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-first',
            template: __webpack_require__(/*! ./first.component.html */ "./src/app/first/first.component.html"),
            styles: [__webpack_require__(/*! ./first.component.css */ "./src/app/first/first.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FirstComponent);
    return FirstComponent;
}());



/***/ }),

/***/ "./src/app/mock-sample.ts":
/*!********************************!*\
  !*** ./src/app/mock-sample.ts ***!
  \********************************/
/*! exports provided: Samples */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Samples", function() { return Samples; });
var Samples = [
    { id: 1, name: 'test1', phoneNumber: 12345, address: 'test1 address' },
    { id: 2, name: 'test2', phoneNumber: 56789, address: 'test2 address' },
    { id: 3, name: 'test3', phoneNumber: 384644, address: 'test3 address' }
];


/***/ }),

/***/ "./src/app/sample.ts":
/*!***************************!*\
  !*** ./src/app/sample.ts ***!
  \***************************/
/*! exports provided: Sample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sample", function() { return Sample; });
var Sample = /** @class */ (function () {
    function Sample() {
    }
    return Sample;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\crud\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map