"use strict";
(self["webpackChunkGmat_Admin"] = self["webpackChunkGmat_Admin"] || []).push([[592],{

/***/ 5926:
/*!**************************************!*\
  !*** ./src/app/config/api.config.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "URLS": () => (/* binding */ URLS)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);

const assetUrl = 'assets/json';
const URLS = Object({
  // login
  login: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/UserLogin/Login/UserLogin`,
  createproject: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/Project/Create/ProjectChecklist`,
  projectList: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/Project/Get/ProjectList`,
  checklist: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/Project/Get/GetAllProjects`,
  createuser: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/UserLogin/Create/User`,
  userlist: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/UserLogin/Get/Alluser`,
  DeleteUser: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/UserLogin/Delete/User`,
  projectcreate: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/UserLogin/Create/Project`,
  updateuser: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/UserLogin/Update/User`,
  Updatecheck: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/Project/Update/ProjectChecklist`,
  Updateproject: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/UserLogin/Update/Project`,
  Deleteproject: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/UserLogin/Delete/Project`,
  getRolls: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/Role/GetAllRoles`,
  saveRole: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/Role/Create`,
  UserRoleassign: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/Role/UserRoleMaping/Create`,
  GetuserRole: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/Role/GetAllUserRoles`
});

/***/ }),

/***/ 5830:
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 529);


class ApiService {
  constructor(http) {
    this.http = http;
  }

  get(url, params) {
    return this.http.get(`${url}`, {
      params: params
    });
  }

  post(url, data, options) {
    return this.http.post(`${url}`, data, options);
  }

  patch(url, data, options) {
    return this.http.patch(`${url}`, data, options);
  }

  delete(url, body) {
    return this.http.delete(`${url}`, {
      body: body
    });
  }

  static {
    this.ɵfac = function ApiService_Factory(t) {
      return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };

  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiService,
      factory: ApiService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  apiUrl: 'https://192.168.1.12/api'
};

/***/ })

}]);