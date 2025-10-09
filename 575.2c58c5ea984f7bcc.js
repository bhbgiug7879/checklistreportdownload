"use strict";
(self["webpackChunkGmat_Admin"] = self["webpackChunkGmat_Admin"] || []).push([[575],{

/***/ 3914:
/*!********************************************************!*\
  !*** ./src/app/_modules/admin/admin-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminRoutingModule": () => (/* binding */ AdminRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 6426);
/* harmony import */ var _container_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container/container.component */ 5536);
/* harmony import */ var _usercreate_usercreate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usercreate/usercreate.component */ 5335);
/* harmony import */ var _projectcreate_projectcreate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectcreate/projectcreate.component */ 5729);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 2974);
/* harmony import */ var _usercreate_usercreate_form_usercreate_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usercreate/usercreate-form/usercreate-form.component */ 7233);
/* harmony import */ var _usercreate_usercreate_list_usercreate_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usercreate/usercreate-list/usercreate-list.component */ 7262);
/* harmony import */ var _projectcreate_projectcreate_form_projectcreate_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projectcreate/projectcreate-form/projectcreate-form.component */ 7287);
/* harmony import */ var _projectcreate_projectcreate_list_projectcreate_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projectcreate/projectcreate-list/projectcreate-list.component */ 9347);
/* harmony import */ var _home_homeprojectcrateform_homeprojectcrateform_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/homeprojectcrateform/homeprojectcrateform.component */ 1913);
/* harmony import */ var _home_homeprojectcratelist_homeprojectcratelist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/homeprojectcratelist/homeprojectcratelist.component */ 5074);
/* harmony import */ var src_app_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/auth-guard.service */ 8968);
/* harmony import */ var _rolemapping_rolemapping_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./rolemapping/rolemapping.component */ 565);
/* harmony import */ var _rolemapping_rolemappingcreate_form_rolemappingcreate_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rolemapping/rolemappingcreate-form/rolemappingcreate-form.component */ 2627);
/* harmony import */ var _rolemapping_rolemapping_list_rolemapping_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rolemapping/rolemapping-list/rolemapping-list.component */ 7574);
/* harmony import */ var _userrolemapping_userrolemapping_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./userrolemapping/userrolemapping.component */ 5311);
/* harmony import */ var _userrolemapping_userrolecreate_userrolecreate_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./userrolemapping/userrolecreate/userrolecreate.component */ 3425);
/* harmony import */ var _userrolemapping_userrolelist_userrolelist_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./userrolemapping/userrolelist/userrolelist.component */ 4626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 4650);






















const routes = [
    {
        path: '', component: _container_container_component__WEBPACK_IMPORTED_MODULE_1__.ContainerComponent,
        children: [
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.DashboardComponent },
            {
                path: 'user_create', component: _usercreate_usercreate_component__WEBPACK_IMPORTED_MODULE_2__.UsercreateComponent,
                children: getChildRoute(_usercreate_usercreate_form_usercreate_form_component__WEBPACK_IMPORTED_MODULE_5__.UsercreateFormComponent, _usercreate_usercreate_list_usercreate_list_component__WEBPACK_IMPORTED_MODULE_6__.UsercreateListComponent)
            },
            {
                path: 'checklist_create', component: _projectcreate_projectcreate_component__WEBPACK_IMPORTED_MODULE_3__.ProjectcreateComponent,
                children: getChildRoute(_projectcreate_projectcreate_form_projectcreate_form_component__WEBPACK_IMPORTED_MODULE_7__.ProjectcreateFormComponent, _projectcreate_projectcreate_list_projectcreate_list_component__WEBPACK_IMPORTED_MODULE_8__.ProjectcreateListComponent)
            },
            {
                path: 'project_create', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
                children: getChildRoute(_home_homeprojectcrateform_homeprojectcrateform_component__WEBPACK_IMPORTED_MODULE_9__.HomeprojectcrateformComponent, _home_homeprojectcratelist_homeprojectcratelist_component__WEBPACK_IMPORTED_MODULE_10__.HomeprojectcratelistComponent)
            },
            {
                path: 'rolemapping_create', component: _rolemapping_rolemapping_component__WEBPACK_IMPORTED_MODULE_12__.RolemappingComponent,
                children: getChildRoute(_rolemapping_rolemappingcreate_form_rolemappingcreate_form_component__WEBPACK_IMPORTED_MODULE_13__.RolemappingcreateFormComponent, _rolemapping_rolemapping_list_rolemapping_list_component__WEBPACK_IMPORTED_MODULE_14__.RolemappingListComponent)
            },
            {
                path: 'userrolemapping', component: _userrolemapping_userrolemapping_component__WEBPACK_IMPORTED_MODULE_15__.UserrolemappingComponent,
                children: getChildRoute(_userrolemapping_userrolecreate_userrolecreate_component__WEBPACK_IMPORTED_MODULE_16__.UserrolecreateComponent, _userrolemapping_userrolelist_userrolelist_component__WEBPACK_IMPORTED_MODULE_17__.UserrolelistComponent)
            }
        ]
    }
];
function getChildRoute(formComponent, listComponent) {
    const routes = [
        { path: 'create', component: formComponent, canActivate: [src_app_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__.AuthGuard], data: { type: 'CR' } },
        { path: 'list', component: listComponent, canActivate: [src_app_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__.AuthGuard], data: { type: 'LI' } },
        { path: 'edit/:id', component: formComponent, canActivate: [src_app_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__.AuthGuard], data: { type: 'ED' } },
        { path: 'details/:id', component: formComponent, canActivate: [src_app_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__.AuthGuard], data: { type: 'RE' } }
    ];
    return routes;
}
class AdminRoutingModule {
    static { this.ɵfac = function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AdminRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule] }); }
}
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule] }); })();


/***/ }),

/***/ 7575:
/*!************************************************!*\
  !*** ./src/app/_modules/admin/admin.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminModule": () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-routing.module */ 3914);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 6426);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 2118);
/* harmony import */ var _container_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container/container.component */ 5536);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 2974);
/* harmony import */ var _usercreate_usercreate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usercreate/usercreate.component */ 5335);
/* harmony import */ var _projectcreate_projectcreate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projectcreate/projectcreate.component */ 5729);
/* harmony import */ var _projectcreate_projectcreate_form_projectcreate_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projectcreate/projectcreate-form/projectcreate-form.component */ 7287);
/* harmony import */ var _projectcreate_projectcreate_list_projectcreate_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projectcreate/projectcreate-list/projectcreate-list.component */ 9347);
/* harmony import */ var _usercreate_usercreate_form_usercreate_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./usercreate/usercreate-form/usercreate-form.component */ 7233);
/* harmony import */ var _usercreate_usercreate_list_usercreate_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./usercreate/usercreate-list/usercreate-list.component */ 7262);
/* harmony import */ var _home_homeprojectcrateform_homeprojectcrateform_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/homeprojectcrateform/homeprojectcrateform.component */ 1913);
/* harmony import */ var _home_homeprojectcratelist_homeprojectcratelist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/homeprojectcratelist/homeprojectcratelist.component */ 5074);
/* harmony import */ var _rolemapping_rolemapping_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rolemapping/rolemapping.component */ 565);
/* harmony import */ var _rolemapping_rolemappingcreate_form_rolemappingcreate_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rolemapping/rolemappingcreate-form/rolemappingcreate-form.component */ 2627);
/* harmony import */ var _rolemapping_rolemapping_list_rolemapping_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./rolemapping/rolemapping-list/rolemapping-list.component */ 7574);
/* harmony import */ var _userrolemapping_userrolemapping_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./userrolemapping/userrolemapping.component */ 5311);
/* harmony import */ var _userrolemapping_userrolecreate_userrolecreate_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./userrolemapping/userrolecreate/userrolecreate.component */ 3425);
/* harmony import */ var _userrolemapping_userrolelist_userrolelist_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./userrolemapping/userrolelist/userrolelist.component */ 4626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 4650);






















class AdminModule {
    static { this.ɵfac = function AdminModule_Factory(t) { return new (t || AdminModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: AdminModule }); }
    static { this.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule,
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); }
}
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
        _container_container_component__WEBPACK_IMPORTED_MODULE_3__.ContainerComponent,
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.DashboardComponent,
        _usercreate_usercreate_component__WEBPACK_IMPORTED_MODULE_5__.UsercreateComponent,
        _projectcreate_projectcreate_component__WEBPACK_IMPORTED_MODULE_6__.ProjectcreateComponent,
        _projectcreate_projectcreate_form_projectcreate_form_component__WEBPACK_IMPORTED_MODULE_7__.ProjectcreateFormComponent,
        _projectcreate_projectcreate_list_projectcreate_list_component__WEBPACK_IMPORTED_MODULE_8__.ProjectcreateListComponent,
        _usercreate_usercreate_form_usercreate_form_component__WEBPACK_IMPORTED_MODULE_9__.UsercreateFormComponent,
        _usercreate_usercreate_list_usercreate_list_component__WEBPACK_IMPORTED_MODULE_10__.UsercreateListComponent,
        _home_homeprojectcrateform_homeprojectcrateform_component__WEBPACK_IMPORTED_MODULE_11__.HomeprojectcrateformComponent,
        _home_homeprojectcratelist_homeprojectcratelist_component__WEBPACK_IMPORTED_MODULE_12__.HomeprojectcratelistComponent,
        _rolemapping_rolemapping_component__WEBPACK_IMPORTED_MODULE_13__.RolemappingComponent,
        _rolemapping_rolemappingcreate_form_rolemappingcreate_form_component__WEBPACK_IMPORTED_MODULE_14__.RolemappingcreateFormComponent,
        _rolemapping_rolemapping_list_rolemapping_list_component__WEBPACK_IMPORTED_MODULE_15__.RolemappingListComponent,
        _userrolemapping_userrolemapping_component__WEBPACK_IMPORTED_MODULE_16__.UserrolemappingComponent,
        _userrolemapping_userrolecreate_userrolecreate_component__WEBPACK_IMPORTED_MODULE_17__.UserrolecreateComponent,
        _userrolemapping_userrolelist_userrolelist_component__WEBPACK_IMPORTED_MODULE_18__.UserrolelistComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule,
        _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ }),

/***/ 5536:
/*!*****************************************************************!*\
  !*** ./src/app/_modules/admin/container/container.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContainerComponent": () => (/* binding */ ContainerComponent)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ 2942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 7185);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ 3267);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ 3683);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ 8255);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ 6338);









const _c0 = ["sidenav"];
function ContainerComponent_img_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 28);
} }
const _c1 = function (a0) { return { "shows": a0 }; };
function ContainerComponent_img_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 29);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c1, ctx_r3.viewmenu));
} }
const _c2 = function (a0) { return [a0]; };
const _c3 = function (a0) { return { "d-lg-none": a0 }; };
function ContainerComponent_div_25_div_1_ng_container_6_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const subMenu_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c2, subMenu_r11.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", subMenu_r11.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c3, !ctx_r12.isSideBarOpen && !ctx_r12.viewmenu));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](subMenu_r11.screen_name);
} }
function ContainerComponent_div_25_div_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContainerComponent_div_25_div_1_ng_container_6_button_1_Template, 4, 8, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const subMenu_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", subMenu_r11.isShow);
} }
const _c4 = function (a0) { return { "accordion-button": a0 }; };
function ContainerComponent_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33)(1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ContainerComponent_div_25_div_1_ng_container_6_Template, 2, 1, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r6 = ctx_r14.index;
    const menu_r5 = ctx_r14.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c4, ctx_r7.isSideBarOpen));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-bs-target", "#menuCollapse" + i_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", menu_r5.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c3, !ctx_r7.isSideBarOpen && !ctx_r7.viewmenu));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](menu_r5.screen_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", "menuCollapse" + i_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", menu_r5.subMenu);
} }
const _c5 = function () { return { exact: true }; };
function ContainerComponent_div_25_ng_template_2_button_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const menu_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c2, menu_r5.path))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", menu_r5.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c3, !ctx_r15.isSideBarOpen && !ctx_r15.viewmenu));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menu_r5.screen_name, " ");
} }
function ContainerComponent_div_25_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ContainerComponent_div_25_ng_template_2_button_0_Template, 4, 10, "button", 42);
} if (rf & 2) {
    const menu_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menu_r5.isShow);
} }
function ContainerComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContainerComponent_div_25_div_1_Template, 7, 11, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ContainerComponent_div_25_ng_template_2_Template, 1, 1, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r5 = ctx.$implicit;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menu_r5.subMenu && menu_r5.subMenu.length !== 0 && menu_r5.isShow)("ngIfElse", _r8);
} }
const _c6 = function (a0, a1) { return { "ml-custom-opened": a0, "ml-custom-closed": a1 }; };
const _c7 = function (a0, a1) { return { "sidenav-opened": a0, "sidenav-closed": a1 }; };
class ContainerComponent {
    constructor(router, toast) {
        this.router = router;
        this.toast = toast;
        this.showFiller = false;
        this.isSideBarOpen = true;
        this.viewmenu = true;
        this.menus = ___WEBPACK_IMPORTED_MODULE_0__.MENU;
    }
    ngOnInit() {
        this.user = localStorage.getItem('userDetails');
    }
    sidebarToggle() {
        this.viewmenu = !this.viewmenu;
        this.isSideBarOpen = this.sideNav._opened;
    }
    mouseover() {
        this.viewmenu = true;
    }
    mouseleave() {
        if (this.isSideBarOpen) {
            this.viewmenu = true;
        }
        else {
            this.viewmenu = false;
        }
    }
    logout() {
        if (this.user) {
            this.toast.success(this.user, 'Logout Successfully');
            this.router.navigate(['/auth']);
        }
    }
    static { this.ɵfac = function ContainerComponent_Factory(t) { return new (t || ContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContainerComponent, selectors: [["app-container"]], viewQuery: function ContainerComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        } if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sideNav = _t.first);
        } }, decls: 34, vars: 16, consts: [["color", "primary"], ["id", "sidebar-button", 1, "btn", "ms-0", "border-0", 3, "click"], [1, "fa-solid", "fa-bars", "fs-xsm", "bg-transparent", "text-white", 3, "ngClass"], [1, "toolbar-item-spacer"], ["aria-label", "User Account Menu", 1, "btn", "border-0", 3, "matMenuTriggerFor"], [1, "d-flex"], ["src", "assets/icons/man.png", 1, "img", "img-fluid", "rounded-circle", 2, "height", "2.1rem"], [1, "ms-3", "my-auto", "text-start"], [1, "theme-tertiary", "fw-normal", "mb-0", "lh-1", "text-white"], ["yPosition", "below", 3, "overlapTrigger"], ["userAccountMenu", ""], ["mat-menu-item", "", "routerLink", "/auth/login/admin", 1, "text-center", 2, "display", "flex", "align-items", "center", 3, "click"], [1, "my-auto", "d-inline-block"], ["src", "assets/icons/logout.png", "alt", "logout-icon"], [1, "my-auto", "ms-1", "line-height-4"], [1, "app-container"], ["mode", "side", "opened", "true", 1, "app-sidenav", "custom-scrollbar", 3, "mouseover", "mouseleave"], ["sidenav", ""], [1, "d-flex", "align-items-center", "news-logo"], ["src", "https://d2q4gipm2ebkzp.cloudfront.net/icons/footer-logo.svg", "class", "w-75", 4, "ngIf"], ["src", "https://d2q4gipm2ebkzp.cloudfront.net/icons/footer-logo.svg", "class", "img-fluid", 3, "ngClass", 4, "ngIf"], [1, "navlist-content"], ["class", "accordion menu-accordian ms-3 me-3 my-3", "id", "menuAccordian", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "pt-4", "router-container"], [1, "row", "my-2"], [1, "col-md-8"], [1, "mb-0", "text-muted"], ["src", "https://d2q4gipm2ebkzp.cloudfront.net/icons/footer-logo.svg", 1, "w-75"], ["src", "https://d2q4gipm2ebkzp.cloudfront.net/icons/footer-logo.svg", 1, "img-fluid", 3, "ngClass"], ["id", "menuAccordian", 1, "accordion", "menu-accordian", "ms-3", "me-3", "my-3"], ["class", "accordion-item border-0 bg-transparent", 4, "ngIf", "ngIfElse"], ["withoutSubmenu", ""], [1, "accordion-item", "border-0", "bg-transparent"], ["type", "button", "data-bs-toggle", "collapse", "aria-expanded", "false", "aria-controls", "collapseOne", 1, "accordion-link", "acc-btn", "collapsed", 3, "ngClass"], [1, "me-3", "sidenav-icons", 3, "src"], ["routerLinkActive", "active", 1, "d-block", "fs-d", 3, "ngClass"], ["aria-labelledby", "headingOne", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse"], [4, "ngFor", "ngForOf"], ["class", "accordion-link secondary", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["routerLinkActive", "active", 1, "accordion-link", "secondary", 3, "routerLink"], [1, "d-block", 3, "ngClass"], ["class", "accordion-link primary", "routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", 4, "ngIf"], ["routerLinkActive", "active", 1, "accordion-link", "primary", 3, "routerLink", "routerLinkActiveOptions"], [1, "d-block", "fs-d", 3, "ngClass"]], template: function ContainerComponent_Template(rf, ctx) { if (rf & 1) {
            const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section")(1, "mat-toolbar", 0)(2, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContainerComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20); _r1.toggle(); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.sidebarToggle()); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4)(6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7)(9, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-menu", 9, 10)(13, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContainerComponent_Template_button_click_13_listener() { return ctx.logout(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Logout");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-sidenav-container", 15)(19, "mat-sidenav", 16, 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseover", function ContainerComponent_Template_mat_sidenav_mouseover_19_listener() { return ctx.mouseover(); })("mouseleave", function ContainerComponent_Template_mat_sidenav_mouseleave_19_listener() { return ctx.mouseleave(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ContainerComponent_img_22_Template, 1, 0, "img", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ContainerComponent_img_23_Template, 1, 3, "img", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-nav-list", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ContainerComponent_div_25_Template, 4, 2, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-sidenav-content", 23)(27, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 25)(30, "div", 26)(31, "p", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Copyright 2023 \u00A9 Gramosoft All rights reserved");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        } if (rf & 2) {
            const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](10, _c6, ctx.isSideBarOpen, !ctx.isSideBarOpen));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("overlapTrigger", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-elevation-z4", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSideBarOpen && ctx.viewmenu);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isSideBarOpen || !ctx.viewmenu);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menus);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](13, _c7, ctx.isSideBarOpen, !ctx.isSideBarOpen));
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavContent, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbar, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuTrigger, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatNavList], styles: [".mat-drawer-container[_ngcontent-%COMP%], .mat-drawer-content[_ngcontent-%COMP%] {\n  position: unset;\n}\n\n.sidebar-toggle[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #001c4a;\n  border-radius: 40px;\n  color: #fff;\n  cursor: pointer;\n}\n\n.shows[_ngcontent-%COMP%] {\n  width: 20% !important;\n}\n\nmat-sidenav[_ngcontent-%COMP%]   .navlist-content[_ngcontent-%COMP%] {\n  flex-direction: column;\n  min-height: calc(100vh - 88px);\n  overflow-x: hidden;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 9;\n  height: 60px;\n  border-bottom: 1px solid #afb1b6;\n  background-color: #001c4a;\n  box-shadow: 0 0 11px rgba(143, 164, 232, 0.08);\n}\n\n.toolbar-item-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.app-container[_ngcontent-%COMP%] {\n  margin: 0;\n  height: calc(100vh - 66px);\n}\n\n.app-sidenav-content[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.app-sidenav[_ngcontent-%COMP%] {\n  width: 68px;\n  visibility: visible !important;\n  transform: none !important;\n  transition: width 0.3s;\n  overflow-x: hidden;\n  background-color: #001c4a;\n  box-shadow: 0 0 11px rgba(143, 164, 232, 0.08);\n}\n\n.app-sidenav.mat-drawer-opened[_ngcontent-%COMP%] {\n  width: 230px;\n  transition: width 0.3s;\n}\n\nmat-sidenav-content.sidenav-closed[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  margin-left: 55px;\n  padding-left: 35px;\n  padding-right: 35px;\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property: transform, margin-left, margin-right;\n}\n\nmat-sidenav-content.sidenav-opened[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  margin-left: 230px !important;\n  padding-left: 28px;\n  padding-right: 28px;\n  background-color: #ecf0fa !important;\n}\n\nmat-sidenav[_ngcontent-%COMP%]:hover {\n  width: 230px;\n  transition: width 0.3s; \n}\n\n.app-sidenav[_ngcontent-%COMP%]   .mat-nav-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:hover {\n  transform: translateX(4px);\n}\n\n.app-sidenav[_ngcontent-%COMP%]   .mat-nav-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  transition: 0.3s;\n}\n\n.router-container[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 128px);\n}\n\n.menu-accordian[_ngcontent-%COMP%]   .accordion-link[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  color: #ffffff;\n  outline: 0 !important;\n  border: 0 !important;\n  box-shadow: none !important;\n  background-color: transparent;\n  text-align: left;\n  display: flex;\n  align-items: center;\n  padding-left: 14px;\n  transition: 0.3s ease-in-out;\n}\n\n.accordion-button[_ngcontent-%COMP%]::after {\n  filter: grayscale(100%) sepia(100%) brightness(0) invert(1);\n}\n\n.menu-accordian[_ngcontent-%COMP%]   .accordion-link.active[_ngcontent-%COMP%] {\n  background-color: #bf0a30;\n}\n\n.menu-accordian[_ngcontent-%COMP%]   .accordion-link.primary.active[_ngcontent-%COMP%] {\n  padding-right: 20px;\n  background-color: #bf0a30;\n  color: #ffffff;\n  border-radius: 0.25rem;\n}\n\n.menu-accordian[_ngcontent-%COMP%]   .accordion-link.active[_ngcontent-%COMP%] {\n  background-color: #bf0a30;\n}\n\n.menu-accordian[_ngcontent-%COMP%]   .accordion-link[_ngcontent-%COMP%]:hover {\n  padding-right: 20px;\n  color: #ffffff;\n  border-radius: 0.25rem;\n  transition: 0.3s ease-in-out;\n}\n\n.mat-list-base[_ngcontent-%COMP%] {\n  padding-top: 23px;\n}\n\n.menu-accordian[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .accordion-link[_ngcontent-%COMP%]:not(.acc-btn) {\n  padding: 10px 27px;\n  border-radius: 0.25rem;\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important;\n}\n\n@media (max-width: 992px) {\n  .app-sidenav[_ngcontent-%COMP%] {\n    width: 0;\n  }\n  .app-sidenav.mat-drawer-opened[_ngcontent-%COMP%] {\n    width: 230px;\n  }\n  mat-sidenav-content.sidenav-closed[_ngcontent-%COMP%], mat-sidenav-content.sidenav-opened[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 0px !important;\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n}\n\n.fa-bars[_ngcontent-%COMP%] {\n  font-size: 24px;\n  transition: 0.3s; \n}\n\n@media (min-width: 992px) {\n  .ml-custom-opened[_ngcontent-%COMP%] {\n    margin-left: 16rem !important;\n  }\n  .ml-custom-closed[_ngcontent-%COMP%] {\n    margin-left: 4rem !important;\n  }\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  margin-top: 0 !important;\n  z-index: 999 !important;\n}\n\n.white-color[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.logo-text[_ngcontent-%COMP%] {\n  transition: margin-left 0.3s linear, opacity 0.3s ease, visibility 0.3s ease;\n}\n\n.news-logo[_ngcontent-%COMP%] {\n  text-wrap: nowrap;\n  border-bottom: 1px solid #afb1b6;\n  padding: 0.6rem;\n  height: 60px;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  color: black !important;\n  background-color: transparent !important;\n  border-color: transparent !important;\n}\n\n.btn[_ngcontent-%COMP%] {\n  color: black !important;\n}\n\n.display-none[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.mat-drawer-container[_ngcontent-%COMP%] {\n  background-color: #f4f6f9 !important;\n}\n\n*[_ngcontent-%COMP%] {\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.mat-menu-item[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  margin-right: auto !important;\n  vertical-align: middle;\n  font-size: 16px !important;\n}\n\n.mat-ripple[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n}\n\n.mat-menu-content[_ngcontent-%COMP%] {\n  padding-top: 0px !important;\n  padding-bottom: auto !important;\n  font-size: 16px !important;\n}\n\n.mat-menu-panel[_ngcontent-%COMP%] {\n  min-height: 47px !important;\n}\n\n.line-height-4[_ngcontent-%COMP%] {\n  line-height: 4;\n}\n\n.sidenav-icons[_ngcontent-%COMP%] {\n  filter: invert(1);\n}"] }); }
}


/***/ }),

/***/ 2942:
/*!***************************************************!*\
  !*** ./src/app/_modules/admin/container/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MENU": () => (/* binding */ MENU)
/* harmony export */ });
const MENU = [
    {
        screen_name: 'Dashboard',
        path: '/admin/dashboard',
        icon: 'assets/icons/dashboard.png',
        isShow: true
    },
    {
        screen_name: 'User',
        path: '',
        icon: 'assets/icons/user.png',
        isShow: true,
        subMenu: [
            {
                screen_name: 'User Create',
                path: '/admin/user_create/create',
                icon: 'assets/icons/add-user.png',
                isShow: true,
            },
            {
                screen_name: 'User List',
                path: '/admin/user_create/list',
                icon: 'assets/icons/user-list.png',
                isShow: true
            }
        ]
    },
    {
        screen_name: 'Project',
        path: '',
        icon: 'assets/icons/project.png',
        isShow: true,
        subMenu: [
            {
                screen_name: 'Project Create',
                path: '/admin/project_create/create',
                icon: 'assets/icons/projectcreate.png',
                isShow: true,
            },
            {
                screen_name: 'Project List',
                path: '/admin/project_create/list',
                icon: 'assets/icons/projectlist.png',
                isShow: true
            }
        ]
    },
    {
        screen_name: 'Checklist',
        path: '',
        icon: 'assets/icons/checked.png',
        isShow: true,
        subMenu: [
            {
                screen_name: 'Checklist Create',
                path: '/admin/checklist_create/create',
                icon: 'assets/icons/checklit-create.png',
                isShow: true,
            },
            {
                screen_name: 'Checklist List',
                path: '/admin/checklist_create/list',
                icon: 'assets/icons/list.png',
                isShow: true
            }
        ]
    },
    {
        screen_name: 'Role Mapping',
        path: '',
        icon: 'assets/icons/project.png',
        isShow: true,
        subMenu: [
            {
                screen_name: 'Role Mapping Create',
                path: '/admin/rolemapping_create/create',
                icon: 'assets/icons/projectcreate.png',
                isShow: true,
            },
        ]
    },
    {
        screen_name: 'User Role Mapping',
        path: '',
        icon: 'assets/icons/project.png',
        isShow: true,
        subMenu: [
            {
                screen_name: 'Role Mapping Create',
                path: '/admin/userrolemapping/create',
                icon: 'assets/icons/projectcreate.png',
                isShow: true,
            },
            {
                screen_name: 'Role Mapping List',
                path: '/admin/userrolemapping/list',
                icon: 'assets/icons/projectlist.png',
                isShow: true
            }
        ]
    },
];


/***/ }),

/***/ 2974:
/*!*****************************************************************!*\
  !*** ./src/app/_modules/admin/dashboard/dashboard.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
    static { this.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 2, vars: 0, template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dashboard works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } } }); }
}


/***/ }),

/***/ 6426:
/*!*******************************************************!*\
  !*** ./src/app/_modules/admin/home/home.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4793);


class HomeComponent {
    constructor() {
    }
    ngOnInit() {
    }
    static { this.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 1, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet] }); }
}


/***/ }),

/***/ 1913:
/*!********************************************************************************************!*\
  !*** ./src/app/_modules/admin/home/homeprojectcrateform/homeprojectcrateform.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeprojectcrateformComponent": () => (/* binding */ HomeprojectcrateformComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2722);
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/config/api.config */ 5926);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data-service */ 3385);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 7185);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ 8796);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 4859);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 9549);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 284);














class HomeprojectcrateformComponent {
    constructor(apiservice, activeRoute, dataService, location, router, toast, fb) {
        this.apiservice = apiservice;
        this.activeRoute = activeRoute;
        this.dataService = dataService;
        this.location = location;
        this.router = router;
        this.toast = toast;
        this.fb = fb;
        this.frontendUsers = [];
        this.backendUsers = [];
        this.managerUsers = [];
        this.unSubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.Projectcreateform = this.fb.group({
            projectName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            frontendDeveloperId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            backendDeveloperId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            managerID: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            developId: [0]
        });
    }
    ngOnInit() {
        this.tabtybe = this.dataService.tabType;
        this.getparamsData();
        this.getusername();
    }
    getparamsData() {
        debugger;
        this.activeRoute.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.unSubscribe$)).subscribe(params => {
            const encodedData = params.get('id');
            if (encodedData) {
                try {
                    const decoded = JSON.parse(atob(decodeURIComponent(encodedData)));
                    this.projectlistData = decoded;
                }
                catch (err) {
                    console.error('Decoding failed:', err, encodedData);
                }
            }
            if (this.tabtybe === 'ED') {
                this.patchForm();
            }
            else if (this.tabtybe === 'RE') {
                this.patchForm();
                this.Projectcreateform.disable();
            }
        });
    }
    patchForm() {
        this.Projectcreateform.patchValue({
            projectName: this.projectlistData.projectsName,
            frontendDeveloperId: this.projectlistData.fD_id,
            backendDeveloperId: this.projectlistData.bD_id,
            managerID: this.projectlistData.m_id,
        });
    }
    getusername() {
        const payload = {
            pageSize: 1000,
            pageNumber: 1,
            userId: 0,
            userName: ''
        };
        this.apiservice.post(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_0__.URLS.userlist, payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.unSubscribe$)).subscribe((res) => {
            if (res) {
                this.usernameList = res.response;
                // filter by developId
                this.frontendUsers = this.usernameList.filter((u) => u.developId === 1);
                this.backendUsers = this.usernameList.filter((u) => u.developId === 2);
                this.managerUsers = this.usernameList.filter((u) => u.developId === 3);
            }
            else {
                this.toast.error(res.message, 'Error');
            }
        });
    }
    submitForm() {
        const form = this.Projectcreateform.valid;
        if (this.tabtybe === 'ED') {
            this.Updateproject();
        }
        else if (form) {
            this.Createproject();
        }
    }
    Createproject() {
        this.apiservice.post(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_0__.URLS.projectcreate, this.Projectcreateform.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.unSubscribe$)).subscribe((res) => {
            if (res.status == true) {
                this.toast.success(res.message, 'Project Created Successfully');
                this.router.navigate(['/admin/project_create/list']);
            }
            else {
                this.toast.error(res.message, 'Error');
            }
        });
    }
    Updateproject() {
        const payload = {
            id: this.projectlistData.id,
            projectName: this.Projectcreateform.get('projectName')?.value,
            frontendDeveloperId: this.Projectcreateform.get('frontendDeveloperId')?.value,
            backendDeveloperId: this.Projectcreateform.get('backendDeveloperId')?.value,
            managerID: this.Projectcreateform.get('managerID')?.value
        };
        this.apiservice.post(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_0__.URLS.Updateproject, payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.unSubscribe$)).subscribe((res) => {
            if (res.status == true) {
                this.toast.success(res.message, 'Project Update Successfully');
                this.router.navigate(['/admin/project_create/list']);
            }
            else {
                this.toast.error(res.message, 'Error');
            }
        });
    }
    goBack() {
        this.location.back();
    }
    static { this.ɵfac = function HomeprojectcrateformComponent_Factory(t) { return new (t || HomeprojectcrateformComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: HomeprojectcrateformComponent, selectors: [["app-homeprojectcrateform"]], decls: 37, vars: 5, consts: [[1, "container"], [1, "my-3", "card", "px-5", "pt-4"], [1, "card-header", "text-center", "bg-transparent", "border-0"], [3, "formGroup", "ngSubmit"], [1, "row", "row-cols-2"], [1, "col"], [1, "mb-3", "w-100"], ["appearance", "outline", 1, "w-100"], ["type", "text", "matInput", "", "formControlName", "projectName", "placeholder", "Project Name"], [1, "mb-3"], [1, "my-2"], ["formControlName", "frontendDeveloperId", "bindLabel", "employee_Name", "bindValue", "id", "placeholder", "Select User Name", 1, "form-control", "userselect", 3, "items"], ["formControlName", "backendDeveloperId", "bindLabel", "employee_Name", "bindValue", "id", "placeholder", "Select User Name", 1, "form-control", "userselect", 3, "items"], ["formControlName", "managerID", "bindLabel", "employee_Name", "bindValue", "id", "placeholder", "Select User Name", 1, "form-control", "userselect", 3, "items"], [1, "d-flex", "justify-content-around", "my-3"], ["mat-raised-button", "", "color", "accent", "type", "submit"], ["mat-raised-button", "", "color", "danger", "type", "button", 3, "click"]], template: function HomeprojectcrateformComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "CREATE PROJECT");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "form", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function HomeprojectcrateformComponent_Template_form_ngSubmit_6_listener() { return ctx.submitForm(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Project Name:");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-form-field", 7)(14, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Project Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 5)(18, "div", 9)(19, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Frontend Developer:");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "ng-select", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 5)(23, "div", 9)(24, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Backend Developer:");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "ng-select", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 5)(28, "div", 9)(29, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Manager:");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "ng-select", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 14)(33, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "button", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HomeprojectcrateformComponent_Template_button_click_35_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, " Cancel ");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.Projectcreateform);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", ctx.frontendUsers);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", ctx.backendUsers);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", ctx.managerUsers);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.tabtybe === "ED" ? "Update" : "Submit", " ");
        } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput] }); }
}


/***/ }),

/***/ 5074:
/*!********************************************************************************************!*\
  !*** ./src/app/_modules/admin/home/homeprojectcratelist/homeprojectcratelist.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeprojectcratelistComponent": () => (/* binding */ HomeprojectcratelistComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2722);
/* harmony import */ var src_app_config_admin_table_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/config/admin-table.config */ 3715);
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/config/api.config */ 5926);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 7185);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var src_app_services_dependency_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/dependency-service */ 4283);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _shared_pages_table_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/pages/table/table.component */ 8002);
/* harmony import */ var _shared_pages_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/pages/paginator/paginator.component */ 3379);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 4859);












const _c0 = function () { return { isEdit: true, isDelete: true, isView: true }; };
class HomeprojectcratelistComponent {
    constructor(router, toast, fb, ds, apiservice) {
        this.router = router;
        this.toast = toast;
        this.fb = fb;
        this.ds = ds;
        this.apiservice = apiservice;
        this.tableModel = src_app_config_admin_table_config__WEBPACK_IMPORTED_MODULE_0__.projectlist;
        this.projectList = [];
        this.unSubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.projectlistForm = this.fb.group({
            page: this.fb.group({
                pageNumber: [1],
                pageSize: [10],
                length: [0]
            }),
            dateRange: this.fb.group({
                fromDate: [0],
                toDate: [0]
            }),
            projectID: [0],
            projectName: ['']
        });
    }
    ngOnInit() {
        this.getprojectlistData();
    }
    getprojectlistData() {
        this.apiservice.post(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_1__.URLS.projectList, this.projectlistForm.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.unSubscribe$)).subscribe((res) => {
            if (res) {
                this.projectList = res.response;
                // this.toast.success(res.message, 'Success');
            }
            else {
                this.toast.error(res.message, 'Error');
            }
        });
    }
    deletecheckList(id) {
        this.apiservice.post(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_1__.URLS.Deleteproject}/${id}`, {}).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.unSubscribe$)).subscribe((res) => {
            if (res) {
                this.getprojectlistData();
                this.toast.success(res.message, 'Deleted Successfully');
            }
            else {
                this.toast.error(res.message, 'Error');
            }
        });
    }
    static { this.ɵfac = function HomeprojectcratelistComponent_Factory(t) { return new (t || HomeprojectcratelistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_dependency_service__WEBPACK_IMPORTED_MODULE_2__.DependencyService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: HomeprojectcratelistComponent, selectors: [["app-homeprojectcratelist"]], decls: 9, vars: 7, consts: [[1, "container"], [1, "d-flex", "justify-content-between", "align-items-center", "my-3"], ["routerLink", "/admin/project_create/create", "mat-raised-button", "", "color", "accent", "type", "submit"], [3, "tableModel", "tableData", "tableConfig", "editEvent", "viewEvent", "deleteEvent"], [3, "length", "pageIndex", "pageSize", "changeEvent"]], template: function HomeprojectcratelistComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "div", 1)(3, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Project list");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, " Create ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "app-table", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("editEvent", function HomeprojectcratelistComponent_Template_app_table_editEvent_7_listener($event) { return ctx.router.navigate(["/admin/project_create/edit", $event]); })("viewEvent", function HomeprojectcratelistComponent_Template_app_table_viewEvent_7_listener($event) { return ctx.router.navigate(["/admin/project_create/details", $event]); })("deleteEvent", function HomeprojectcratelistComponent_Template_app_table_deleteEvent_7_listener($event) { return ctx.deletecheckList([$event.id]); });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "app-paginator", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("changeEvent", function HomeprojectcratelistComponent_Template_app_paginator_changeEvent_8_listener() { return ctx.getprojectlistData(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("tableModel", ctx.tableModel)("tableData", ctx.projectList)("tableConfig", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](6, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("length", ctx.ds.getFormControl(ctx.projectlistForm, "page.length"))("pageIndex", ctx.ds.getFormControl(ctx.projectlistForm, "page.pageNumber"))("pageSize", ctx.ds.getFormControl(ctx.projectlistForm, "page.pageSize"));
        } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _shared_pages_table_table_component__WEBPACK_IMPORTED_MODULE_4__.TableComponent, _shared_pages_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_5__.PaginatorComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton] }); }
}


/***/ }),

/***/ 7287:
/*!*************************************************************************************************!*\
  !*** ./src/app/_modules/admin/projectcreate/projectcreate-form/projectcreate-form.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectcreateFormComponent": () => (/* binding */ ProjectcreateFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2722);
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/config/api.config */ 5926);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data-service */ 3385);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 7185);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4859);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 9549);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 284);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 4385);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 7873);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 3626);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ 6709);


















function ProjectcreateFormComponent_mat_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", project_r11.projectId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", project_r11.projectsName, " ");
} }
function ProjectcreateFormComponent_th_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Task Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProjectcreateFormComponent_td_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 31)(1, "mat-form-field", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", task_r12);
} }
function ProjectcreateFormComponent_th_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProjectcreateFormComponent_td_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-checkbox", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", task_r14);
} }
function ProjectcreateFormComponent_th_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Tested ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProjectcreateFormComponent_td_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-checkbox", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", task_r15);
} }
function ProjectcreateFormComponent_th_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProjectcreateFormComponent_td_66_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 36)(1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProjectcreateFormComponent_td_66_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const i_r17 = restoredCtx.index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r18.removeTask(i_r17)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function ProjectcreateFormComponent_tr_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 38);
} }
function ProjectcreateFormComponent_tr_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 39);
} }
const _c0 = function () { return ["taskName", "verified", "tested", "action"]; };
class ProjectcreateFormComponent {
    constructor(fb, activeRoute, dataService, location, router, apiservice, toast) {
        this.fb = fb;
        this.activeRoute = activeRoute;
        this.dataService = dataService;
        this.location = location;
        this.router = router;
        this.apiservice = apiservice;
        this.toast = toast;
        this.dataSource = [];
        this.unSubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.selected = 0;
        this.Reportsform = this.fb.group({
            id: [0,],
            workName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            projectId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            frontendDeveloperName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            backentDeveloperName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            managerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            testedBy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            workLists: this.fb.array([])
        });
        this.projectForm = this.fb.group({
            page: this.fb.group({
                pageNumber: [1],
                pageSize: [100]
            }),
            dateRange: this.fb.group({
                fromDate: [0],
                toDate: [0]
            }),
            projectID: [0],
            projectName: ['']
        });
    }
    ngOnInit() {
        this.tabtybe = this.dataService.tabType;
        this.getparamsData();
        this.getProject();
        this.addTask();
    }
    get workLists() {
        return this.Reportsform.get('workLists');
    }
    getparamsData() {
        debugger;
        this.activeRoute.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.unSubscribe$)).subscribe(params => {
            const encodedData = params.get('id');
            if (encodedData) {
                try {
                    const decoded = JSON.parse(atob(decodeURIComponent(encodedData)));
                    this.checklistData = decoded;
                }
                catch (err) {
                    console.error('Decoding failed:', err, encodedData);
                }
            }
            if (this.tabtybe === 'ED') {
                this.patchForm();
            }
            else if (this.tabtybe === 'RE') {
                this.patchForm();
                this.Reportsform.disable();
            }
        });
    }
    patchForm() {
        debugger;
        if (!this.checklistData)
            return;
        this.Reportsform.patchValue({
            workName: this.checklistData.workName,
            projectId: this.checklistData.projectId,
            frontendDeveloperName: this.checklistData.frontendDeveloperName,
            backentDeveloperName: this.checklistData.backentDeveloperName,
            managerName: this.checklistData.managerName,
            testedBy: this.checklistData.testedBy,
        });
        // Patch workLists manually
        this.workLists.clear();
        if (this.checklistData.workLists && Array.isArray(this.checklistData.workLists)) {
            this.checklistData.workLists.forEach((item) => {
                this.workLists.push(this.createWorkListItem(item));
            });
        }
    }
    createWorkListItem(item) {
        debugger;
        return this.fb.group({
            taskName: [item?.taskName || '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            verified: [item?.verified || false],
            tested: [item?.tested || false],
        });
    }
    addTask() {
        const taskForm = this.fb.group({
            taskName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            verified: [false],
            tested: [false]
        });
        this.workLists.push(taskForm);
        this.dataSource = [...this.workLists.controls];
    }
    removeTask(index) {
        if (this.workLists.length <= 1) {
            this.addTask();
        }
        this.workLists.removeAt(index);
        this.dataSource = [...this.workLists.controls];
    }
    submitForm() {
        debugger;
        const form = this.Reportsform.valid;
        if (this.tabtybe === 'ED') {
            this.Updateproject();
        }
        else {
            this.Createproject();
        }
    }
    Createproject() {
        this.apiservice.post(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_0__.URLS.createproject, this.Reportsform.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.unSubscribe$)).subscribe((res) => {
            if (res.status == true) {
                this.toast.success(res.message, 'Project Created Successfully');
                this.router.navigate(['/admin/checklist_create/list']);
            }
            else {
                this.toast.error(res.message, 'Error');
            }
        });
    }
    Updateproject() {
        this.Reportsform.get('id')?.setValue(1);
        this.apiservice.post(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_0__.URLS.createproject, this.Reportsform.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.unSubscribe$)).subscribe((res) => {
            if (res.status == true) {
                this.toast.success(res.message, 'Project Update Successfully');
                this.router.navigate(['/admin/checklist_create/list']);
            }
            else {
                this.toast.error(res.message, 'Error');
            }
        });
    }
    onProjectChange(projectId) {
        debugger;
        const selected = this.projectList.find((p) => p.projectId === projectId);
        if (selected) {
            this.Reportsform.patchValue({
                frontendDeveloperName: selected.frontendDevloper,
                backentDeveloperName: selected.backendDeveloper,
                managerName: selected.manager,
            });
        }
    }
    getProject() {
        this.apiservice.post(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_0__.URLS.projectList, this.projectForm.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.unSubscribe$)).subscribe((res) => {
            if (res) {
                this.projectList = res.response;
                this.toast.success(res.message, 'Success');
            }
            else {
                this.toast.error(res.message, 'Error');
            }
        });
    }
    goBack() {
        this.location.back();
    }
    static { this.ɵfac = function ProjectcreateFormComponent_Factory(t) { return new (t || ProjectcreateFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ProjectcreateFormComponent, selectors: [["app-projectcreate-form"]], decls: 74, vars: 8, consts: [[1, "container"], [1, "my-3", "card", "px-5", "pt-4"], [1, "card-header", "text-center", "bg-transparent", "border-0"], [3, "formGroup", "ngSubmit"], [1, "row", "row-cols-2"], [1, "col"], ["appearance", "outline"], ["type", "text", "matInput", "", "formControlName", "workName", "placeholder", "Work Name"], ["formControlName", "projectId", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "frontendDeveloperName", "placeholder", "Frontend Developer Name", "readonly", ""], ["matInput", "", "formControlName", "backentDeveloperName", "placeholder", "Backend Developer Name", "readonly", ""], ["matInput", "", "formControlName", "managerName", "placeholder", "Manager Name", "readonly", ""], ["type", "text", "matInput", "", "formControlName", "testedBy", "placeholder", "Tested By"], [1, "task-form", "mt-4"], ["mat-raised-button", "", "color", "primary", "type", "button", 3, "click"], ["mat-table", "", 1, "mat-elevation-z8", 2, "width", "100%", 3, "dataSource"], ["matColumnDef", "taskName"], ["class", "text-center", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "text-center", "mat-cell", "", 3, "formGroup", 4, "matCellDef"], ["matColumnDef", "verified"], ["matColumnDef", "tested"], ["matColumnDef", "action"], ["class", "text-center", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "d-flex", "justify-content-around", "my-3"], ["mat-raised-button", "", "color", "accent", "type", "submit"], ["mat-raised-button", "", "color", "danger", "type", "button", 3, "click"], [3, "value"], ["mat-header-cell", "", 1, "text-center"], ["mat-cell", "", 1, "text-center", 3, "formGroup"], ["appearance", "outline", 2, "width", "100%"], ["matInput", "", "placeholder", "Enter task name", "formControlName", "taskName"], ["color", "primary", "formControlName", "verified"], ["color", "accent", "formControlName", "tested"], ["mat-cell", "", 1, "text-center"], ["mat-raised-button", "", "color", "warn", "type", "button", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ProjectcreateFormComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "CHECKLIST PREPARATIONS");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ProjectcreateFormComponent_Template_form_ngSubmit_6_listener() { return ctx.submitForm(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Work Name:");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-form-field", 6)(12, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Work Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 5)(16, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Project Name:");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-form-field", 6)(19, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Project Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-select", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function ProjectcreateFormComponent_Template_mat_select_selectionChange_21_listener($event) { return ctx.onProjectChange($event.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, ProjectcreateFormComponent_mat_option_22_Template, 2, 2, "mat-option", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 5)(24, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Frontend Developer Name:");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-form-field", 6)(27, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Frontend Developer Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 5)(31, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Backend Developer Name:");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-form-field", 6)(34, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Backend Developer Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 5)(38, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Project Manager Name:");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "mat-form-field", 6)(41, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Project Manager Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 5)(45, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Tested By:");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "mat-form-field", 6)(48, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Tested By");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 14)(52, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProjectcreateFormComponent_Template_button_click_52_listener() { return ctx.addTask(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, " + Add Task ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "table", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](55, 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, ProjectcreateFormComponent_th_56_Template, 2, 0, "th", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, ProjectcreateFormComponent_td_57_Template, 3, 1, "td", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](58, 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, ProjectcreateFormComponent_th_59_Template, 2, 0, "th", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](60, ProjectcreateFormComponent_td_60_Template, 2, 1, "td", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](61, 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, ProjectcreateFormComponent_th_62_Template, 2, 0, "th", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](63, ProjectcreateFormComponent_td_63_Template, 2, 1, "td", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](64, 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, ProjectcreateFormComponent_th_65_Template, 2, 0, "th", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](66, ProjectcreateFormComponent_td_66_Template, 3, 0, "td", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](67, ProjectcreateFormComponent_tr_67_Template, 1, 0, "tr", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](68, ProjectcreateFormComponent_tr_68_Template, 1, 0, "tr", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 26)(70, "button", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "button", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProjectcreateFormComponent_Template_button_click_72_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, " Cancel ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.Reportsform);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.projectList);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](32);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.tabtybe === "ED" ? "Update" : "Submit", " ");
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRow, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckbox], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: large;\n  font-weight: 400;\n  margin-bottom: 2px;\n}"] }); }
}


/***/ }),

/***/ 9347:
/*!*************************************************************************************************!*\
  !*** ./src/app/_modules/admin/projectcreate/projectcreate-list/projectcreate-list.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectcreateListComponent": () => (/* binding */ ProjectcreateListComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2722);
/* harmony import */ var src_app_config_admin_table_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/config/admin-table.config */ 3715);
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/config/api.config */ 5926);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 7185);
/* harmony import */ var src_app_services_dependency_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/dependency-service */ 4283);
/* harmony import */ var _shared_pages_table_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/pages/table/table.component */ 8002);
/* harmony import */ var _shared_pages_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/pages/paginator/paginator.component */ 3379);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ 8796);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 4859);














const _c0 = function () { return { isEdit: true, isDelete: false, isView: true }; };
class ProjectcreateListComponent {
    constructor(router, fb, apiservice, toast, ds) {
        this.router = router;
        this.fb = fb;
        this.apiservice = apiservice;
        this.toast = toast;
        this.ds = ds;
        this.unSubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.checkList = [];
        this.tableModel = src_app_config_admin_table_config__WEBPACK_IMPORTED_MODULE_0__.checklist;
        this.developerTypes = [
            { developId: 1, description: 'Frontend Developer' },
            { developId: 2, description: 'Backend Developer' },
            { developId: 3, description: 'Manager' },
        ];
        this.checklistForm = this.fb.group({
            page: this.fb.group({
                pageNumber: [1],
                pageSize: [10],
                length: [0]
            }),
            dateRange: this.fb.group({
                fromDate: [0],
                toDate: [0]
            }),
            projectID: [0],
            projectName: ['']
        });
        this.Filterform = this.fb.group({
            projectId: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            developerType: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            developerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
        });
    }
    ngOnInit() {
        this.getChecklistData();
    }
    submitForm() { }
    getChecklistData() {
        this.apiservice.post(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_1__.URLS.checklist, this.checklistForm.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.unSubscribe$)).subscribe((res) => {
            if (res) {
                this.checkList = res.response;
                // this.toast.success(res.message, 'Success');
            }
            else {
                this.toast.error(res.message, 'Error');
            }
        });
    }
    static { this.ɵfac = function ProjectcreateListComponent_Factory(t) { return new (t || ProjectcreateListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_dependency_service__WEBPACK_IMPORTED_MODULE_3__.DependencyService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: ProjectcreateListComponent, selectors: [["app-projectcreate-list"]], decls: 29, vars: 11, consts: [[1, "container"], [1, "d-flex", "justify-content-between", "align-items-center", "my-3"], ["routerLink", "/admin/checklist_create/create", "mat-raised-button", "", "color", "accent", "type", "submit"], [3, "formGroup", "ngSubmit"], [1, "row", "row-cols-3"], [1, "col"], [1, "mb-3"], [1, "my-2"], ["formControlName", "projectId", "bindLabel", "projectId", "bindValue", "projectId", "placeholder", "Select ProjectID", 1, "form-control", 3, "items"], ["formControlName", "developerType", "bindLabel", "description", "bindValue", "developId", "placeholder", "Select Developer Type", 1, "form-control", 3, "items"], ["formControlName", "developerName", "bindLabel", "", "bindValue", "", "placeholder", "Select Developer Name", 1, "form-control", "border-0", 3, "items"], [1, "text-center", "my-3"], ["mat-raised-button", "", "color", "accent", "type", "submit"], [3, "tableModel", "tableData", "tableConfig", "editEvent", "viewEvent"], [3, "length", "pageIndex", "pageSize", "changeEvent"]], template: function ProjectcreateListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "div", 1)(3, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Check list");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, " Create ");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "form", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngSubmit", function ProjectcreateListComponent_Template_form_ngSubmit_7_listener() { return ctx.submitForm(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 4)(9, "div", 5)(10, "div", 6)(11, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "ProjectID:");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "ng-select", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 5)(15, "div", 6)(16, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Developer Type:");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "ng-select", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 5)(20, "div", 6)(21, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "Developer Name:");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "ng-select", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 11)(25, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, " Submit ");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "app-table", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("editEvent", function ProjectcreateListComponent_Template_app_table_editEvent_27_listener($event) { return ctx.router.navigate(["/admin/checklist_create/edit", $event]); })("viewEvent", function ProjectcreateListComponent_Template_app_table_viewEvent_27_listener($event) { return ctx.router.navigate(["/admin/checklist_create/details", $event]); });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "app-paginator", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("changeEvent", function ProjectcreateListComponent_Template_app_paginator_changeEvent_28_listener() { return ctx.getChecklistData(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.Filterform);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("items", ctx.checkList);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("items", ctx.developerTypes);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("items", ctx.checkList);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("tableModel", ctx.tableModel)("tableData", ctx.checkList)("tableConfig", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](10, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("length", ctx.ds.getFormControl(ctx.checklistForm, "page.length"))("pageIndex", ctx.ds.getFormControl(ctx.checklistForm, "page.pageNumber"))("pageSize", ctx.ds.getFormControl(ctx.checklistForm, "page.pageSize"));
        } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _shared_pages_table_table_component__WEBPACK_IMPORTED_MODULE_4__.TableComponent, _shared_pages_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_5__.PaginatorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton], styles: [".ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  border: none !important;\n}"] }); }
}


/***/ }),

/***/ 5729:
/*!*************************************************************************!*\
  !*** ./src/app/_modules/admin/projectcreate/projectcreate.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectcreateComponent": () => (/* binding */ ProjectcreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4793);


class ProjectcreateComponent {
    constructor() { }
    ngOnInit() {
    }
    static { this.ɵfac = function ProjectcreateComponent_Factory(t) { return new (t || ProjectcreateComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectcreateComponent, selectors: [["app-projectcreate"]], decls: 1, vars: 0, template: function ProjectcreateComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet] }); }
}


/***/ }),

/***/ 7574:
/*!*******************************************************************************************!*\
  !*** ./src/app/_modules/admin/rolemapping/rolemapping-list/rolemapping-list.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolemappingListComponent": () => (/* binding */ RolemappingListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

class RolemappingListComponent {
    static { this.ɵfac = function RolemappingListComponent_Factory(t) { return new (t || RolemappingListComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RolemappingListComponent, selectors: [["app-rolemapping-list"]], decls: 0, vars: 0, template: function RolemappingListComponent_Template(rf, ctx) { } }); }
}


/***/ }),

/***/ 565:
/*!*********************************************************************!*\
  !*** ./src/app/_modules/admin/rolemapping/rolemapping.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolemappingComponent": () => (/* binding */ RolemappingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4793);


class RolemappingComponent {
    constructor() { }
    ngOnInit() {
    }
    static { this.ɵfac = function RolemappingComponent_Factory(t) { return new (t || RolemappingComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RolemappingComponent, selectors: [["app-rolemapping"]], decls: 1, vars: 0, template: function RolemappingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet] }); }
}


/***/ }),

/***/ 2627:
/*!*******************************************************************************************************!*\
  !*** ./src/app/_modules/admin/rolemapping/rolemappingcreate-form/rolemappingcreate-form.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolemappingcreateFormComponent": () => (/* binding */ RolemappingcreateFormComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2722);
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/config/api.config */ 5926);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 7185);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6895);






function RolemappingcreateFormComponent_tr_18_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 10);
} }
function RolemappingcreateFormComponent_tr_18_input_8_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RolemappingcreateFormComponent_tr_18_input_8_Template_input_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); const role_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](role_r1.create = _r11.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r2 = ctx_r15.index;
    const role_r1 = ctx_r15.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "create", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", role_r1.create)("disabled", !role_r1.isEditing);
} }
function RolemappingcreateFormComponent_tr_18_i_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 10);
} }
function RolemappingcreateFormComponent_tr_18_input_12_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 11, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RolemappingcreateFormComponent_tr_18_input_12_Template_input_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); const role_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](role_r1.read = _r16.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r2 = ctx_r20.index;
    const role_r1 = ctx_r20.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "read", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", role_r1.read)("disabled", !role_r1.isEditing);
} }
function RolemappingcreateFormComponent_tr_18_i_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 10);
} }
function RolemappingcreateFormComponent_tr_18_input_16_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 11, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RolemappingcreateFormComponent_tr_18_input_16_Template_input_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); const role_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](role_r1.update = _r21.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r2 = ctx_r25.index;
    const role_r1 = ctx_r25.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "update", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", role_r1.update)("disabled", !role_r1.isEditing);
} }
function RolemappingcreateFormComponent_tr_18_i_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 10);
} }
function RolemappingcreateFormComponent_tr_18_input_20_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 11, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RolemappingcreateFormComponent_tr_18_input_20_Template_input_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); const role_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](role_r1.delete = _r26.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r2 = ctx_r30.index;
    const role_r1 = ctx_r30.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "delete", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", role_r1.delete)("disabled", !role_r1.isEditing);
} }
function RolemappingcreateFormComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td")(6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, RolemappingcreateFormComponent_tr_18_i_7_Template, 1, 0, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, RolemappingcreateFormComponent_tr_18_input_8_Template, 2, 3, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td")(10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, RolemappingcreateFormComponent_tr_18_i_11_Template, 1, 0, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, RolemappingcreateFormComponent_tr_18_input_12_Template, 2, 3, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td")(14, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, RolemappingcreateFormComponent_tr_18_i_15_Template, 1, 0, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, RolemappingcreateFormComponent_tr_18_input_16_Template, 2, 3, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "td")(18, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, RolemappingcreateFormComponent_tr_18_i_19_Template, 1, 0, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, RolemappingcreateFormComponent_tr_18_input_20_Template, 2, 3, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "td", 5)(22, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RolemappingcreateFormComponent_tr_18_Template_button_click_22_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32); const role_r1 = restoredCtx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r31.toggleEdit(role_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const role_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](role_r1.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", role_r1.create == false && role_r1.isEditing == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", role_r1.create !== false || role_r1.isEditing == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", role_r1.read == false && role_r1.isEditing == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", role_r1.read !== false || role_r1.isEditing == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", role_r1.update == false && role_r1.isEditing == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", role_r1.update !== false || role_r1.isEditing == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", role_r1.delete == false && role_r1.isEditing == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", role_r1.delete !== false || role_r1.isEditing == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.buttonActive && role_r1.id !== ctx_r0.activeRoleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", role_r1.isEditing ? "Save" : "Edit", " ");
} }
class RolemappingcreateFormComponent {
    constructor(toast, apiservice) {
        this.toast = toast;
        this.apiservice = apiservice;
        this.unSubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.buttonActive = false;
    }
    ngOnInit() {
        this.GetallRoles();
    }
    GetallRoles() {
        this.apiservice.post(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_0__.URLS.getRolls, {}).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.unSubscribe$)).subscribe((res) => {
            if (res) {
                this.RoleList = res.map((role) => ({
                    ...role,
                    isEditing: false
                }));
            }
            else {
                this.toast.error(res.message, 'Error');
            }
        });
    }
    toggleEdit(role) {
        debugger;
        if (!role.isEditing) {
            this.activeRoleId = role.id;
            this.buttonActive = true;
        }
        else {
            this.activeRoleId = null;
            this.buttonActive = false;
        }
        role.isEditing = !role.isEditing;
        if (!role.isEditing) {
            const payload = {
                id: role.id,
                role: role.role,
                create: role.create,
                read: role.read,
                update: role.update,
                delete: role.delete,
                basicAccess: role.basicAccess
            };
            this.apiservice.post(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_0__.URLS.saveRole, payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.unSubscribe$)).subscribe({
                next: (res) => {
                    if (res.status == true) {
                        this.toast.success('Role updated successfully');
                        this.GetallRoles();
                    }
                    else {
                        this.toast.error(res.message || 'Failed to update role');
                    }
                },
                error: (err) => {
                    this.toast.error('Error updating role');
                    console.error(err);
                }
            });
        }
    }
    static { this.ɵfac = function RolemappingcreateFormComponent_Factory(t) { return new (t || RolemappingcreateFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RolemappingcreateFormComponent, selectors: [["app-rolemappingcreate-form"]], decls: 19, vars: 1, consts: [[1, "table", "table-bordered"], ["scope", "col", 1, "text-center"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row", 1, "text-center"], [1, "text-center"], [1, "form-check"], ["class", "fa fa-times text-danger", 4, "ngIf"], ["class", "form-check-input", "type", "checkbox", 3, "id", "checked", "disabled", "change", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", "py-1", 3, "disabled", "click"], [1, "fa", "fa-times", "text-danger"], ["type", "checkbox", 1, "form-check-input", 3, "id", "checked", "disabled", "change"], ["createCheckbox", ""], ["readCheckbox", ""], ["updateCheckbox", ""], ["deleteCheckbox", ""]], template: function RolemappingcreateFormComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 0)(1, "thead")(2, "tr")(3, "th", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "S.No");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Role");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Create");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Read");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "th", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Update");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Delete");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Actions");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, RolemappingcreateFormComponent_tr_18_Template, 24, 12, "tr", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.RoleList);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf], styles: [".form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #178e11 !important;\n  border-color: #0d7907 !important;\n}\n\n.form-check-input[_ngcontent-%COMP%]:focus {\n  border-color: #178e11 !important;\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(51, 110, 6, 0.25) !important;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 1px 18px !important;\n}\n\n.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  margin-left: auto !important;\n}\n\n.text-danger[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n}\n\n.form-check-input[_ngcontent-%COMP%] {\n  border-width: 1.4px !important;\n  border-color: #78797a !important;\n}"] }); }
}


/***/ }),

/***/ 7233:
/*!****************************************************************************************!*\
  !*** ./src/app/_modules/admin/usercreate/usercreate-form/usercreate-form.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsercreateFormComponent": () => (/* binding */ UsercreateFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2722);
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/config/api.config */ 5926);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data-service */ 3385);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 7185);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4859);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 9549);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 284);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 4385);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 7873);
















function UsercreateFormComponent_mat_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const developer_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", developer_r1.developId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](developer_r1.description);
} }
class UsercreateFormComponent {
    constructor(fb, dataService, activeRoute, apiservice, router, toast, location) {
        this.fb = fb;
        this.dataService = dataService;
        this.activeRoute = activeRoute;
        this.apiservice = apiservice;
        this.router = router;
        this.toast = toast;
        this.location = location;
        this.unSubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.selected = 0;
        this.developerTypes = [
            { developId: 0, description: 'None' },
            { developId: 1, description: 'Frontend Developer' },
            { developId: 2, description: 'Backend Developer' },
            { developId: 3, description: 'Manager' },
        ];
        this.UsercreateForm = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
            developId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
        });
    }
    ngOnInit() {
        debugger;
        this.tabtybe = this.dataService.tabType;
        this.getparamsData();
    }
    getparamsData() {
        debugger;
        this.activeRoute.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.unSubscribe$)).subscribe(params => {
            const encodedData = params.get('id');
            if (encodedData) {
                try {
                    const decoded = JSON.parse(atob(decodeURIComponent(encodedData)));
                    this.userData = decoded;
                }
                catch (err) {
                    console.error('Decoding failed:', err, encodedData);
                }
            }
            if (this.tabtybe === 'ED') {
                this.patchForm();
            }
            else if (this.tabtybe === 'RE') {
                this.patchForm();
                this.UsercreateForm.disable();
            }
        });
    }
    patchForm() {
        this.UsercreateForm.patchValue({
            name: this.userData.employee_Name,
            emailId: this.userData.emailId,
            password: this.userData.password,
            developId: Number(this.userData.developId)
        });
    }
    goBack() {
        this.location.back();
    }
    submitForm() {
        const form = this.UsercreateForm.valid;
        if (form && this.tabtybe === 'ED') {
            this.updateUser();
        }
        else {
            this.Createuser();
        }
    }
    Createuser() {
        this.apiservice.post(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_0__.URLS.createuser, this.UsercreateForm.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.unSubscribe$)).subscribe((res) => {
            if (res.status == true) {
                this.toast.success(res.message, 'User Created Successfully');
                this.router.navigate(['/admin/user_create/list']);
            }
            else {
                this.toast.error(res.message, 'Error');
            }
        });
    }
    updateUser() {
        const payload = {
            id: this.userData.id,
            employee_Name: this.UsercreateForm.get('name')?.value,
            employeeQuid: this.userData.employeeQuid,
            emailId: this.UsercreateForm.get('emailId')?.value,
            password: this.UsercreateForm.get('password')?.value,
            developId: this.UsercreateForm.get('developId')?.value,
            createOn: this.userData.createOn,
            updateOn: this.userData.updateOn
        };
        this.apiservice.post(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_0__.URLS.updateuser, payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.unSubscribe$)).subscribe((res) => {
            if (res.status == true) {
                this.toast.success(res.message, 'User Update Successfully');
                this.router.navigate(['/admin/user_create/list']);
            }
            else {
                this.toast.error(res.message, 'Error');
            }
        });
    }
    static { this.ɵfac = function UsercreateFormComponent_Factory(t) { return new (t || UsercreateFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.Location)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UsercreateFormComponent, selectors: [["app-usercreate-form"]], decls: 40, vars: 5, consts: [[1, "usercreate-section"], [1, "container"], [1, "card", "p-4"], [1, "card-header", "bg-transparent", "border-0", "text-center"], [3, "formGroup", "ngSubmit"], [1, "row", "row-cols-2"], [1, "col"], ["for", "", 1, "mb-2"], ["appearance", "outline"], ["type", "text", "matInput", "", "placeholder", "User Name", "formControlName", "name"], ["type", "text", "matInput", "", "placeholder", "Email", "formControlName", "emailId"], ["type", "text", "matInput", "", "placeholder", "Password", "formControlName", "password"], ["appearance", "outline", 1, "select-input-field"], ["formControlName", "developId", "placeholder", "User Type", 3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-around", "my-3"], ["mat-raised-button", "", "color", "accent", "type", "submit", 3, "disabled"], ["mat-raised-button", "", "color", "danger", "type", "button", 3, "click"], [3, "value"]], template: function UsercreateFormComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "CREATE USER");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function UsercreateFormComponent_Template_form_ngSubmit_6_listener() { return ctx.submitForm(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "User Name:");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-form-field", 8)(12, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "User Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 6)(16, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Email:");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-form-field", 8)(19, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Email");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 6)(23, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Password:");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-form-field", 8)(26, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 6)(30, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "User Type:");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "mat-form-field", 12)(33, "mat-select", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function UsercreateFormComponent_Template_mat_select_valueChange_33_listener($event) { return ctx.selected = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, UsercreateFormComponent_mat_option_34_Template, 2, 2, "mat-option", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 15)(36, "button", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "button", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsercreateFormComponent_Template_button_click_38_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, " Cancel ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.UsercreateForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.selected);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.developerTypes);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.tabtybe === "RE");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.tabtybe === "ED" ? "Update" : "Submit", " ");
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.usercreate-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 80vh;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: large;\n}"] }); }
}


/***/ }),

/***/ 7262:
/*!****************************************************************************************!*\
  !*** ./src/app/_modules/admin/usercreate/usercreate-list/usercreate-list.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsercreateListComponent": () => (/* binding */ UsercreateListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2722);
/* harmony import */ var src_app_config_admin_table_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/config/admin-table.config */ 3715);
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/config/api.config */ 5926);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 7185);
/* harmony import */ var src_app_services_dependency_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/dependency-service */ 4283);
/* harmony import */ var _shared_pages_table_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/pages/table/table.component */ 8002);
/* harmony import */ var _shared_pages_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/pages/paginator/paginator.component */ 3379);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ 8796);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 4859);













const _c0 = function () { return { isEdit: true, isDelete: true, isView: true }; };
class UsercreateListComponent {
    constructor(router, fb, apiservice, toast, ds) {
        this.router = router;
        this.fb = fb;
        this.apiservice = apiservice;
        this.toast = toast;
        this.ds = ds;
        this.tableModel = src_app_config_admin_table_config__WEBPACK_IMPORTED_MODULE_0__.userlist;
        this.unSubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.userlistForm = this.fb.group({
            pageNumber: [1],
            pageSize: [10],
            length: [0],
            userId: [0],
            userName: ['']
        });
    }
    ngOnInit() {
        this.getuserlistData();
        this.getusername();
    }
    // submitForm() {
    //   this.getuserlistData();
    //   this.userlistForm.reset();
    // }
    getusername() {
        const payload = {
            pageSize: 1000,
            pageNumber: 1,
            userId: 0,
            userName: '',
        };
        this.apiservice.post(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_1__.URLS.userlist, payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.unSubscribe$)).subscribe((res) => {
            if (res) {
                this.usernameList = res.response;
            }
            else {
                this.toast.error(res.message, 'Error');
            }
        });
    }
    getuserlistData() {
        this.apiservice.post(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_1__.URLS.userlist, this.userlistForm.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.unSubscribe$)).subscribe((res) => {
            if (res) {
                this.userList = res.response;
                // this.toast.success(res.message, 'Success');
            }
            else {
                this.toast.error(res.message, 'Error');
            }
        });
    }
    deletecheckList(id) {
        this.apiservice.post(`${src_app_config_api_config__WEBPACK_IMPORTED_MODULE_1__.URLS.DeleteUser}/${id}`, {}).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.unSubscribe$)).subscribe((res) => {
            if (res) {
                this.getuserlistData();
                this.toast.success(res.message, 'Deleted Successfully');
            }
            else {
                this.toast.error(res.message, 'Error');
            }
        });
    }
    static { this.ɵfac = function UsercreateListComponent_Factory(t) { return new (t || UsercreateListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_dependency_service__WEBPACK_IMPORTED_MODULE_3__.DependencyService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: UsercreateListComponent, selectors: [["app-usercreate-list"]], decls: 16, vars: 10, consts: [[1, "container"], [1, "d-flex", "justify-content-between", "align-items-center", "my-3"], ["routerLink", "/admin/user_create/create", "mat-raised-button", "", "color", "accent", "type", "submit"], [3, "formGroup"], [1, "row", "row-cols-3"], [1, "col"], [1, "mb-3"], [1, "my-2"], ["formControlName", "userName", "bindLabel", "employee_Name", "bindValue", "employee_Name", "placeholder", "Select User Name", 1, "form-control", "userselect", 3, "clearable", "items", "change", "clear"], [3, "tableModel", "tableData", "tableConfig", "editEvent", "viewEvent", "deleteEvent"], [3, "length", "pageIndex", "pageSize", "changeEvent"]], template: function UsercreateListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "div", 1)(3, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "User list");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, " Create ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "form", 3)(8, "div", 4)(9, "div", 5)(10, "div", 6)(11, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "User Name:");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "ng-select", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function UsercreateListComponent_Template_ng_select_change_13_listener() { return ctx.getuserlistData(); })("clear", function UsercreateListComponent_Template_ng_select_clear_13_listener() { return ctx.getuserlistData(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "app-table", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("editEvent", function UsercreateListComponent_Template_app_table_editEvent_14_listener($event) { return ctx.router.navigate(["/admin/user_create/edit", $event]); })("viewEvent", function UsercreateListComponent_Template_app_table_viewEvent_14_listener($event) { return ctx.router.navigate(["/admin/user_create/details", $event]); })("deleteEvent", function UsercreateListComponent_Template_app_table_deleteEvent_14_listener($event) { return ctx.deletecheckList([$event.id]); });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "app-paginator", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("changeEvent", function UsercreateListComponent_Template_app_paginator_changeEvent_15_listener() { return ctx.getuserlistData(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        } if (rf & 2) {
            let tmp_6_0;
            let tmp_7_0;
            let tmp_8_0;
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.userlistForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("clearable", true)("items", ctx.usernameList);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("tableModel", ctx.tableModel)("tableData", ctx.userList)("tableConfig", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](9, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("length", (tmp_6_0 = ctx.ds.getuserFormControl(ctx.userlistForm, "length")) == null ? null : tmp_6_0.value)("pageIndex", (tmp_7_0 = ctx.ds.getuserFormControl(ctx.userlistForm, "pageNumber")) == null ? null : tmp_7_0.value)("pageSize", (tmp_8_0 = ctx.ds.getuserFormControl(ctx.userlistForm, "pageSize")) == null ? null : tmp_8_0.value);
        } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _shared_pages_table_table_component__WEBPACK_IMPORTED_MODULE_4__.TableComponent, _shared_pages_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_5__.PaginatorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton] }); }
}


/***/ }),

/***/ 5335:
/*!*******************************************************************!*\
  !*** ./src/app/_modules/admin/usercreate/usercreate.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsercreateComponent": () => (/* binding */ UsercreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4793);


class UsercreateComponent {
    ngOnInit() {
    }
    static { this.ɵfac = function UsercreateComponent_Factory(t) { return new (t || UsercreateComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsercreateComponent, selectors: [["app-usercreate"]], decls: 1, vars: 0, template: function UsercreateComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet] }); }
}


/***/ }),

/***/ 3425:
/*!*******************************************************************************************!*\
  !*** ./src/app/_modules/admin/userrolemapping/userrolecreate/userrolecreate.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserrolecreateComponent": () => (/* binding */ UserrolecreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2722);
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/config/api.config */ 5926);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data-service */ 3385);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 7185);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4859);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 9549);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 4385);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 7873);














function UserrolecreateComponent_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const username_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", username_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", username_r3.employee_Name, " ");
} }
function UserrolecreateComponent_mat_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const username_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", username_r4.emailId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", username_r4.emailId, " ");
} }
function UserrolecreateComponent_mat_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Role_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", Role_r5.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", Role_r5.role, " ");
} }
class UserrolecreateComponent {
    constructor(apiservice, activeRoute, dataService, toast, router, fb, location) {
        this.apiservice = apiservice;
        this.activeRoute = activeRoute;
        this.dataService = dataService;
        this.toast = toast;
        this.router = router;
        this.fb = fb;
        this.location = location;
        this.unSubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.isEmailReadonly = false;
        this.userRoleform = this.fb.group({
            id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            emailID: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            role: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
        });
    }
    ngOnInit() {
        this.tabtybe = this.dataService.tabType;
        this.getparamsData();
        this.getusername();
        this.GetallRoles();
    }
    getparamsData() {
        debugger;
        this.activeRoute.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.unSubscribe$)).subscribe(params => {
            const encodedData = params.get('id');
            if (encodedData) {
                try {
                    const decoded = JSON.parse(atob(decodeURIComponent(encodedData)));
                    this.userRoleData = decoded;
                }
                catch (err) {
                    console.error('Decoding failed:', err, encodedData);
                }
            }
            if (this.tabtybe === 'ED') {
                this.patchForm();
            }
            else if (this.tabtybe === 'RE') {
                this.patchForm();
                this.userRoleform.disable();
            }
        });
    }
    patchForm() {
        debugger;
        if (!this.userRoleData)
            return;
        this.userRoleform.patchValue({
            id: this.userRoleData.id,
            emailID: this.userRoleData.emailID,
            role: this.userRoleData.role,
        });
    }
    getusername() {
        const payload = {
            pageSize: 1000,
            pageNumber: 1,
            userId: 0,
            userName: '',
        };
        this.apiservice.post(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_0__.URLS.userlist, payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.unSubscribe$)).subscribe((res) => {
            if (res) {
                this.usernameList = res.response;
            }
            else {
                this.toast.error(res.message, 'Error');
            }
        });
    }
    GetallRoles() {
        this.apiservice.post(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_0__.URLS.getRolls, {}).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.unSubscribe$)).subscribe((res) => {
            if (res) {
                this.RoleList = res;
            }
            else {
                this.toast.error(res.message, 'Error');
            }
        });
    }
    onUsernameChange(userId) {
        debugger;
        const selected = this.usernameList.find((u) => u.id === userId);
        if (selected) {
            this.userRoleform.patchValue({
                emailID: selected.emailId
            });
            this.isEmailReadonly = true;
        }
    }
    submitForm() {
        if (this.tabtybe === 'ED') {
            this.userRoleform.get('id')?.setValue(this.userRoleData.id);
        }
        else {
            this.userRoleform.get('id')?.setValue(0);
        }
        this.apiservice.post(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_0__.URLS.UserRoleassign, this.userRoleform.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.unSubscribe$)).subscribe((res) => {
            if (res.status == true) {
                this.toast.success(res.message, 'Created Successfully');
                this.router.navigate(['/admin/userrolemapping/list']);
            }
            else {
                this.toast.error(res.message, 'Error');
            }
        });
    }
    goBack() {
        this.location.back();
    }
    static { this.ɵfac = function UserrolecreateComponent_Factory(t) { return new (t || UserrolecreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.Location)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UserrolecreateComponent, selectors: [["app-userrolecreate"]], decls: 40, vars: 6, consts: [[1, "container"], [1, "my-3", "card", "px-5", "pt-4"], [1, "card-header", "text-center", "bg-transparent", "border-0"], [3, "formGroup", "ngSubmit"], [1, "row", "row-cols-2"], [1, "col"], ["appearance", "outline", 1, "w-100"], ["formControlName", "id", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "emailID", 3, "disabled"], ["formControlName", "role"], [1, "d-flex", "justify-content-around", "my-3"], ["mat-raised-button", "", "color", "accent", "type", "submit"], ["mat-raised-button", "", "color", "danger", "type", "button", 3, "click"], [3, "value"]], template: function UserrolecreateComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "USER ROLE ASSIGNING");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function UserrolecreateComponent_Template_form_ngSubmit_6_listener() { return ctx.submitForm(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "User Name:");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-form-field", 6)(13, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "User Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-select", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function UserrolecreateComponent_Template_mat_select_selectionChange_15_listener($event) { return ctx.onUsernameChange($event.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, UserrolecreateComponent_mat_option_16_Template, 2, 2, "mat-option", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 5)(18, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Email:");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-form-field", 6)(22, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Email");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-select", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, UserrolecreateComponent_mat_option_25_Template, 2, 2, "mat-option", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 5)(27, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Role:");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-form-field", 6)(31, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Role");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-select", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, UserrolecreateComponent_mat_option_34_Template, 2, 2, "mat-option", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 11)(36, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserrolecreateComponent_Template_button_click_38_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, " Cancel ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.userRoleform);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.usernameList);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isEmailReadonly);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.usernameList);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.RoleList);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.tabtybe === "ED" ? "Update" : "Submit", " ");
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption] }); }
}


/***/ }),

/***/ 4626:
/*!***************************************************************************************!*\
  !*** ./src/app/_modules/admin/userrolemapping/userrolelist/userrolelist.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserrolelistComponent": () => (/* binding */ UserrolelistComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2722);
/* harmony import */ var src_app_config_admin_table_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/config/admin-table.config */ 3715);
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/config/api.config */ 5926);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 7185);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var _shared_pages_table_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/pages/table/table.component */ 8002);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ 8796);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 4859);











const _c0 = function () { return { isEdit: true, isDelete: true, isView: true }; };
class UserrolelistComponent {
    constructor(apiservice, toast, router) {
        this.apiservice = apiservice;
        this.toast = toast;
        this.router = router;
        this.tableModel = src_app_config_admin_table_config__WEBPACK_IMPORTED_MODULE_0__.userRolelist;
        this.unSubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    ngOnInit() {
        this.getUserroleData();
        this.GetallRoles();
    }
    GetallRoles() {
        this.apiservice.post(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_1__.URLS.getRolls, {}).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.unSubscribe$)).subscribe((res) => {
            if (res) {
                this.RoleList = res;
            }
            else {
                this.toast.error(res.message, 'Error');
            }
        });
    }
    getUserroleData() {
        this.apiservice.post(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_1__.URLS.GetuserRole, {}).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.unSubscribe$)).subscribe((res) => {
            if (res) {
                this.userroleList = res;
            }
            else {
                this.toast.error(res.message, 'Error');
            }
        });
    }
    static { this.ɵfac = function UserrolelistComponent_Factory(t) { return new (t || UserrolelistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: UserrolelistComponent, selectors: [["app-userrolelist"]], decls: 15, vars: 5, consts: [[1, "container"], [1, "d-flex", "justify-content-between", "align-items-center", "my-3"], ["routerLink", "/admin/userrolemapping/create", "mat-raised-button", "", "color", "accent", "type", "submit"], [1, "row", "row-cols-3"], [1, "col"], [1, "mb-3"], [1, "my-2"], ["bindLabel", "role", "bindValue", "role", "placeholder", "Select User Role", 1, "form-control", 3, "items"], [3, "tableModel", "tableData", "tableConfig", "editEvent", "viewEvent"]], template: function UserrolelistComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "div", 1)(3, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "User Role list");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Create ");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "form")(8, "div", 3)(9, "div", 4)(10, "div", 5)(11, "label", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "User Role:");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "ng-select", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "app-table", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("editEvent", function UserrolelistComponent_Template_app_table_editEvent_14_listener($event) { return ctx.router.navigate(["/admin/userrolemapping/edit", $event]); })("viewEvent", function UserrolelistComponent_Template_app_table_viewEvent_14_listener($event) { return ctx.router.navigate(["/admin/userrolemapping/details", $event]); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", ctx.RoleList);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("tableModel", ctx.tableModel)("tableData", ctx.userroleList)("tableConfig", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](4, _c0));
        } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _shared_pages_table_table_component__WEBPACK_IMPORTED_MODULE_3__.TableComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton] }); }
}


/***/ }),

/***/ 5311:
/*!*****************************************************************************!*\
  !*** ./src/app/_modules/admin/userrolemapping/userrolemapping.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserrolemappingComponent": () => (/* binding */ UserrolemappingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4793);


class UserrolemappingComponent {
    constructor() { }
    ngOnInit() {
    }
    static { this.ɵfac = function UserrolemappingComponent_Factory(t) { return new (t || UserrolemappingComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserrolemappingComponent, selectors: [["app-userrolemapping"]], decls: 1, vars: 0, template: function UserrolemappingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet] }); }
}


/***/ }),

/***/ 3715:
/*!**********************************************!*\
  !*** ./src/app/config/admin-table.config.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checklist": () => (/* binding */ checklist),
/* harmony export */   "projectlist": () => (/* binding */ projectlist),
/* harmony export */   "userRolelist": () => (/* binding */ userRolelist),
/* harmony export */   "userlist": () => (/* binding */ userlist)
/* harmony export */ });
const checklist = [
    {
        title: 'Work Name',
        value: 'workName',
    },
    {
        title: 'Project Name',
        value: 'projectName',
    },
    {
        title: 'Frontend Developer Name',
        value: 'frontendDeveloperName',
    },
    {
        title: 'Backend Developer Name',
        value: 'backentDeveloperName',
    },
    {
        title: 'Manager Name',
        value: 'managerName',
    },
    {
        title: 'Tested By',
        value: 'testedBy',
    },
    {
        title: 'Actions',
        value: 'actions',
    }
];
const userlist = [
    {
        title: 'Name',
        value: 'employee_Name',
    },
    {
        title: 'Email Id',
        value: 'emailId',
    },
    {
        title: 'Password',
        value: 'password',
    },
    // {
    //     title: 'Developer Type',
    //     value: 'developId',
    // },
    {
        title: 'Actions',
        value: 'actions',
    }
];
const projectlist = [
    {
        title: 'Project Name',
        value: 'projectsName',
    },
    {
        title: 'Frontend Developer Name',
        value: 'frontendDevloper',
    },
    {
        title: 'Backend Developer Name',
        value: 'backendDeveloper',
    },
    {
        title: 'Manager Name',
        value: 'manager',
    },
    {
        title: 'Actions',
        value: 'actions',
    }
];
const userRolelist = [
    {
        title: 'Email ID',
        value: 'emailID',
    },
    {
        title: 'User Role',
        value: 'role',
    },
    {
        title: 'Actions',
        value: 'actions',
    }
];


/***/ }),

/***/ 8968:
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-service */ 3385);
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage.service */ 8345);





class AuthGuard {
    constructor(router, dataService, localService) {
        this.router = router;
        this.dataService = dataService;
        this.localService = localService;
    }
    canActivate(next, state) {
        this.dataService.tabType = next.data['type'];
        debugger;
        if (this.localService.getAccessToken()) {
            return true;
        }
        else {
            this.router.navigate(['/admin/404_page']);
            return false;
        }
    }
    static { this.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService)); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 3385:
/*!******************************************!*\
  !*** ./src/app/services/data-service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

class DataService {
    constructor() {
        this.pageName = '';
        this.tabType = '';
    }
    static { this.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' }); }
}


/***/ })

}]);