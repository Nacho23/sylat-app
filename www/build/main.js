webpackJsonp([5],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    urlApi: 'http://localhost:8000/api',
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_navSelector__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trip_detail_trip_detail__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_app_storage_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__question_question__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_contact__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__godson_list_godson_list__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = /** @class */ (function () {
    function HomePage(nav, tripService, userProvider, store) {
        this.nav = nav;
        this.tripService = tripService;
        this.userProvider = userProvider;
        this.store = store;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.store.get('rol').then(function (result) {
            if (result == 'godson') {
                _this.items = _this.tripService.getNavGodson();
            }
            else if (result == 'godfather') {
                _this.items = _this.tripService.getNavGodfather();
            }
        });
    };
    // view trip detail
    HomePage.prototype.viewDetail = function (id) {
        if (id == 1) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__question_question__["a" /* QuestionPage */]);
        }
        else if (id == 2) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_3__trip_detail_trip_detail__["a" /* TripDetailPage */], { id: id });
        }
        else if (id == 3) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_7__profile_profile__["a" /* ProfilePage */]);
        }
        else if (id == 4) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_8__contact_contact__["a" /* ContactPage */]);
        }
        else if (id == 5) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_9__godson_list_godson_list__["a" /* GodsonListPage */]);
        }
        else if (id == 6) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_3__trip_detail_trip_detail__["a" /* TripDetailPage */], { id: id });
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-trips',template:/*ion-inline-start:"/home/marcelo/Documentos/sylat/sylat-app/src/pages/home/home.html"*/'<!-- -->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      <span ion-text><small>Seguimiento y levantamiento de alertas tempranas</small></span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="trips detail-bg">\n  <!--list of trips-->\n  <div class="trip card" *ngFor="let trip of items" tappable (click)="viewDetail(trip.id)" margin-bottom>\n    <div class="background border-bottom" [ngStyle]="{\'background-image\': \'url(\' + trip.thumb + \')\'}">\n      <div class="background-filter rlt">\n        <div class="align-bottom" padding-left padding-right>\n          <h6 class="pull-left text-white" ion-text>{{ trip.name }}</h6>\n          <div class="clear"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/marcelo/Documentos/sylat/sylat-app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_navSelector__["a" /* TripService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_5__services_app_storage_service__["a" /* AppStorageService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_navSelector__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkout_trip_checkout_trip__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TripDetailPage = /** @class */ (function () {
    function TripDetailPage(nav, tripService) {
        this.nav = nav;
        this.tripService = tripService;
        // number of adult
        this.adults = 2;
        // number of children
        this.children = 0;
        // set sample data
        this.trip = tripService.getItem(1);
    }
    // minus adult when click minus button
    TripDetailPage.prototype.minusAdult = function () {
        this.adults--;
    };
    // plus adult when click plus button
    TripDetailPage.prototype.plusAdult = function () {
        this.adults++;
    };
    // minus children when click minus button
    TripDetailPage.prototype.minusChildren = function () {
        this.children--;
    };
    // plus children when click plus button
    TripDetailPage.prototype.plusChildren = function () {
        this.children++;
    };
    // go to checkout page
    TripDetailPage.prototype.checkout = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__checkout_trip_checkout_trip__["a" /* CheckoutTripPage */]);
    };
    TripDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-trip-detail',template:/*ion-inline-start:"/home/marcelo/Documentos/sylat/sylat-app/src/pages/trip-detail/trip-detail.html"*/'<!-- -->\n<ion-header>\n\n  <ion-navbar  color="primary">\n    <ion-title>\n      <span ion-text>{{ trip.name }}</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="common-bg">\n  <!--slides-->\n  <ion-slides class="to-top" pager>\n    <ion-slide *ngFor="let image of trip.images">\n      <img [src]="image" alt="">\n    </ion-slide>\n  </ion-slides>\n\n  <!--services-->\n  <ion-grid class="border-bottom dark-bg">\n    <ion-row>\n      <ion-col text-center>\n        <div class="text-sm">\n          <div>\n            <ion-icon name="time" class="text-white"></ion-icon>\n            <span ion-text color="light">{{ trip.time }}</span>\n            <ion-icon name="checkbox-outline" margin-left class="text-white" *ngIf="trip.free_cancellation"></ion-icon>\n            <span ion-text color="light" *ngIf="trip.free_cancellation">Free cancellation</span>\n            <ion-icon name="list-box" margin-left class="text-white" *ngIf="trip.electric_voucher"></ion-icon>\n            <span ion-text color="light" *ngIf="trip.electric_voucher">Electronic voucher</span>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!--high light-->\n  <div class="border-bottom" padding>\n    <span ion-text color="dark" class="bold">HIGHLIGHT</span>\n    <ul class="highlight">\n      <li *ngFor="let highlight of trip.highlights">\n        <ion-icon name="checkmark" class="text-green"></ion-icon>\n        <span ion-text color="primary">{{ highlight }}</span>\n      </li>\n    </ul>\n  </div>\n\n  <!--booking form-->\n  <div class="booking-form card round" margin>\n    <div class="border-bottom" padding>\n      <h5>{{ trip.sub_name }}</h5>\n\n      <!--choose guest-->\n      <ion-grid class="filters" no-padding margin-top>\n        <ion-row>\n          <ion-col class="adult" width-70>\n            <span ion-text color="primary"><strong>{{ trip.price_adult | currency:\'USD\':true }}</strong> Adults</span>\n          </ion-col>\n          <ion-col width-10 text-center>\n            <ion-icon name="remove-circle" class="text-2x" tappable (click)="minusAdult()" [hidden]="adults < 2"\n                      color="secondary"></ion-icon>\n          </ion-col>\n          <ion-col width-10 text-center>{{ adults }}</ion-col>\n          <ion-col width-10 text-center>\n            <ion-icon name="add-circle" class="text-2x" tappable (click)="plusAdult()" color="secondary"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row margin-top>\n          <ion-col width-70>\n            <span ion-text color="primary"><strong>{{ trip.price_child | currency:\'USD\':true }}</strong> Child (0-12 years)</span>\n          </ion-col>\n          <ion-col width-10 text-center>\n            <ion-icon name="remove-circle" class="text-2x" tappable (click)="minusChildren()" [hidden]="children < 1"\n                      color="secondary"></ion-icon>\n          </ion-col>\n          <ion-col width-10 text-center>{{ children }}</ion-col>\n          <ion-col width-10 text-center>\n            <ion-icon name="add-circle" class="text-2x" tappable (click)="plusChildren()" color="secondary"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div padding class="form-bottom">\n<!--       <span ion-text color="dark" class="bold">{{ adults }} Adults</span> -->\n      <!--booking button-->\n      <button ion-button class="pull-right" color="secondary" tappable (click)="checkout()">Book Now {{ adults * trip.price_adult +\n        children * trip.price_child | currency:\'USD\':true }}\n      </button>\n      <div class="clear"></div>\n    </div>\n  </div>\n\n  <!--description-->\n  <div class="border-bottom" padding>\n    <span ion-text color="primary" class="bold">DESCRIPTION</span>\n    <p ion-text>{{ trip.description }}</p>\n  </div>\n\n  <!--address-->\n  <div class="border-bottom" padding>\n    <span ion-text color="primary" class="bold">LOCATION</span>\n    <p ion-text>{{ trip.location }}</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/marcelo/Documentos/sylat/sylat-app/src/pages/trip-detail/trip-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_navSelector__["a" /* TripService */]])
    ], TripDetailPage);
    return TripDetailPage;
}());

//# sourceMappingURL=trip-detail.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_common__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_app_storage_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, navParams, commonProvider, userProvider, store, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commonProvider = commonProvider;
        this.userProvider = userProvider;
        this.store = store;
        this.toastCtrl = toastCtrl;
        this.titleButton = 'Enviar mensaje';
        this.store.get('user_uuid').then(function (result) {
            _this.userProvider.getUserResource(result).subscribe(function (event) {
                if (event.body) {
                    _this.currentUser = event.body.data.user;
                }
            });
        });
    }
    ContactPage.prototype.send = function (title, body) {
        var _this = this;
        var user_sender_id = (this.currentUser.id).toString();
        var unit_uuid = this.currentUser.unit.uuid;
        this.commonProvider.postContactResource(title, body, unit_uuid, user_sender_id).subscribe(function (event) {
            if (event.body) {
                _this.title = '';
                _this.body = '';
                var toast = _this.toastCtrl.create({
                    message: 'Mensaje enviado correctamente',
                    duration: 3000,
                    position: 'bottom',
                    cssClass: 'toast-success',
                });
                toast.present();
            }
        });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/marcelo/Documentos/sylat/sylat-app/src/pages/contact/contact.html"*/'<!-- -->\n<ion-header>\n\n  <ion-navbar  color="primary">\n    <ion-title>\n      <span ion-text>Contactar a la escuela</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="common-bg">\n  <!--booking form-->\n  <div class="booking-form card round" margin>\n    <div class="border-bottom" padding>\n      <h5>Enviar mensaje</h5>\n\n      <!--choose guest-->\n      <ion-grid class="filters" no-padding margin-top>\n        <ion-row>\n          <ion-col class="adult" width-70>\n            <ion-item>\n              <ion-label floating>\n                <ion-icon name="bookmark" item-start class="text-primary"></ion-icon>\n                Título\n              </ion-label>\n              <ion-input type="text" [(ngModel)]=\'title\'></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row margin-top>\n          <ion-col width-70>\n            <ion-item>\n              <ion-label floating>\n                <ion-icon name="text" item-start class="text-primary"></ion-icon>\n                Mensaje</ion-label>\n              <ion-textarea [(ngModel)]=\'body\'></ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div padding class="form-bottom">\n      <button ion-button class="pull-right btn-block" color="secondary" tappable (click)="send(title, body)">{{titleButton}}\n      </button>\n      <div class="clear"></div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/marcelo/Documentos/sylat/sylat-app/src/pages/contact/contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_4__services_app_storage_service__["a" /* AppStorageService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GodsonDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GodsonDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GodsonDetailsPage = /** @class */ (function () {
    function GodsonDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.currentUser = this.navParams.get('user');
    }
    GodsonDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('asd', this.currentUser);
    };
    GodsonDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-godson-details',template:/*ion-inline-start:"/home/marcelo/Documentos/sylat/sylat-app/src/pages/godson-details/godson-details.html"*/'<!-- -->\n<ion-header>\n\n  <ion-navbar  color="primary">\n    <ion-title>\n      <span ion-text>Datos de {{currentUser.first_name + \' \' + currentUser.last_name}}</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="common-bg">\n  <!--booking form-->\n\n  <div class="booking-form card round" margin>\n    <div class="border-bottom" padding>\n\n      <ion-list>\n        <ion-item>\n            <ion-button (click)="openUserDetals(item.uuid)">\n              <p>asdad</p>\n              <small>asdsad</small>\n          </ion-button>\n        </ion-item>\n      </ion-list>\n\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/marcelo/Documentos/sylat/sylat-app/src/pages/godson-details/godson-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], GodsonDetailsPage);
    return GodsonDetailsPage;
}());

//# sourceMappingURL=godson-details.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GodsonListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_app_storage_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__godson_details_godson_details__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GodsonListPage = /** @class */ (function () {
    function GodsonListPage(navCtrl, navParams, store, userProvider) {
        /*this.userProvider.getUserCollection({}).subscribe(
          event => {
            if(event.body) {
              let users = event.body.data.users;
              for(let i = 0; i < users.length; i++){
                if(users[i].user_relationship) {
                  console.log(users[i])
                  for(let j = 0; j < users[i].user_relationship[j].length; j++) {
                    if(users[i].user_relationship[j].user_godfather_id == 3) {
                      console.log('asda', users[i].user_relationship[i]);
                      this.godsonList.push(users[i]);
                    }
                  }
                }
              }
              console.log('CAGA', this.godsonList);
            }
          }
        )*/
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.store = store;
        this.userProvider = userProvider;
        this.currentUser = [];
        this.godsonList = [];
        this.store.get('user_id').then(function (user_id) {
            _this.store.get('unit_id').then(function (unit_id) {
                _this.userProvider.getUserCollection({ godfather_id: user_id, unit_id: unit_id }).subscribe(function (event) {
                    if (event.body) {
                        _this.godsonList = event.body.data.users;
                    }
                });
            });
        });
    }
    GodsonListPage.prototype.openUserDetals = function (user_uuid) {
        var _this = this;
        this.userProvider.getUserResource(user_uuid).subscribe(function (event) {
            if (event.body) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__godson_details_godson_details__["a" /* GodsonDetailsPage */], { user: event.body.data.user });
            }
        });
    };
    GodsonListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GodsonListPage');
    };
    GodsonListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-godson-list',template:/*ion-inline-start:"/home/marcelo/Documentos/sylat/sylat-app/src/pages/godson-list/godson-list.html"*/'<!-- -->\n<ion-header>\n\n  <ion-navbar  color="primary">\n    <ion-title>\n      <span ion-text>Lista de ahijados/as</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="common-bg">\n  <!--booking form-->\n  <div class="booking-form card round" margin>\n    <div class="border-bottom" padding>\n\n      <ion-list>\n        <ion-item *ngFor="let item of godsonList">\n            <ion-button (click)="openUserDetals(item.uuid)">\n              <p>{{item.first_name + \' \' + item.last_name}}</p>\n              <small>{{item.rut + \'-\' + item.rut_dv}}</small>\n          </ion-button>\n        </ion-item>\n      </ion-list>\n\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/marcelo/Documentos/sylat/sylat-app/src/pages/godson-list/godson-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_app_storage_service__["a" /* AppStorageService */], __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */]])
    ], GodsonListPage);
    return GodsonListPage;
}());

//# sourceMappingURL=godson-list.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_app_storage_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, store, userProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.store = store;
        this.userProvider = userProvider;
        this.toastCtrl = toastCtrl;
        this.godfatherUuid = '';
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.store.get('user_uuid').then(function (result) {
            _this.userProvider.getUserResource(result).subscribe(function (event) {
                if (event.body) {
                    _this.currentUser = event.body.data.user;
                    _this.first_name = event.body.data.user.first_name;
                    _this.last_name = event.body.data.user.last_name;
                    _this.email = event.body.data.user.email;
                    _this.phone_mobile = event.body.data.user.phone_mobile;
                    _this.rut = event.body.data.user.rut;
                    _this.rut_dv = event.body.data.user.rut_dv;
                }
            });
        });
    };
    ProfilePage.prototype.save = function (first_name, last_name, phone_mobile, address_town) {
        var _this = this;
        var user = {
            first_name: first_name,
            last_name: last_name,
            phone_mobile: phone_mobile,
            address_town: address_town,
            rut: this.currentUser.rut,
            rut_dv: this.currentUser.rut_dv,
            email: this.currentUser.email,
        };
        this.userProvider.putUserCollection(this.currentUser.uuid, user).subscribe(function (event) {
            if (event.body) {
                var toast = _this.toastCtrl.create({
                    message: 'Información actualizada correctamente',
                    duration: 3000,
                    position: 'bottom',
                    cssClass: 'toast-success',
                });
                toast.present();
            }
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/marcelo/Documentos/sylat/sylat-app/src/pages/profile/profile.html"*/'<!-- -->\n<ion-header>\n\n  <ion-navbar  color="primary">\n    <ion-title>\n      <span ion-text>Perfil</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="common-bg">\n  <!--slides-->\n  <ion-slides class="to-top" pager>\n    <ion-slide>\n      <img src="../../assets/img/trip/thumb/trip_1.jpg" alt="">\n    </ion-slide>\n  </ion-slides>\n\n  <!--services-->\n  <ion-grid class="border-bottom dark-bg">\n    <ion-row>\n      <ion-col text-center>\n        <div class="text-sm">\n          <div>\n            <ion-icon name="user" class="text-white"></ion-icon>\n            <span ion-text color="light">{{first_name}}</span>\n            <ion-icon name="email" margin-left class="text-white"></ion-icon>\n            <span ion-text color="light">{{email}}</span>\n            <ion-icon name="phone" margin-left class="text-white"></ion-icon>\n            <span ion-text color="light">{{phone_mobile}}</span>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!--high light-->\n  <div class="border-bottom" padding>\n    <span ion-text color="dark" class="bold">Información</span>\n    <ul class="highlight">\n      <!--<li *ngFor="let highlight of trip.highlights">\n        <ion-icon name="checkmark" class="text-green"></ion-icon>\n        <span ion-text color="primary">{{ highlight }}</span>\n      </li>-->\n      <li>\n        <ion-icon name="arrow-dropright" class="text-green"></ion-icon>\n        <span ion-text color="primary">{{rut}}-{{rut_dv}}</span>\n      </li>\n    </ul>\n  </div>\n\n  <!--booking form-->\n  <div class="booking-form card round" margin>\n    <div class="border-bottom" padding>\n      <h5>Información personal</h5>\n\n      <!--choose guest-->\n      <ion-grid class="filters" no-padding margin-top>\n        <ion-row>\n          <ion-col class="adult" width-70>\n            <ion-item>\n              <ion-input type="text" [(ngModel)]=\'first_name\' placeholder=\'Nombre\'></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row margin-top>\n          <ion-col width-70>\n            <ion-item>\n              <ion-input type="text" [(ngModel)]=\'last_name\' placeholder=\'Apellido\'></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row margin-top>\n          <ion-col width-70>\n            <ion-item>\n              <ion-input type="text" [(ngModel)]=\'phone_mobile\' placeholder=\'Teléfono\'></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row margin-top>\n          <ion-col width-70>\n            <ion-item>\n              <ion-input type="text" [(ngModel)]=\'address_town\' placeholder=\'Ciudad de origen\'></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row margin-top>\n          <ion-col width-70>\n            <ion-item>\n              <ion-input type="text" [(ngModel)]=\'more\' placeholder=\'Algo más\'></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div padding class="form-bottom">\n      <button ion-button class="pull-right btn-block" color="secondary" tappable (click)="save(first_name, last_name, phone_mobile, address_town)">\n        Guardar\n      </button>\n      <div class="clear"></div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/marcelo/Documentos/sylat/sylat-app/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_app_storage_service__["a" /* AppStorageService */], __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuestionPage = /** @class */ (function () {
    function QuestionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    QuestionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuestionPage');
    };
    QuestionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-question',template:/*ion-inline-start:"/home/marcelo/Documentos/sylat/sylat-app/src/pages/question/question.html"*/'<!--\n  Generated template for the QuestionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>question</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/marcelo/Documentos/sylat/sylat-app/src/pages/question/question.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], QuestionPage);
    return QuestionPage;
}());

//# sourceMappingURL=question.js.map

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 194;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/contact/contact.module": [
		474,
		4
	],
	"../pages/godson-details/godson-details.module": [
		475,
		3
	],
	"../pages/godson-list/godson-list.module": [
		476,
		2
	],
	"../pages/profile/profile.module": [
		477,
		1
	],
	"../pages/question/question.module": [
		478,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 237;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_app_storage_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the CommonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CommonProvider = /** @class */ (function () {
    function CommonProvider(http, store) {
        var _this = this;
        this.http = http;
        this.store = store;
        this.api = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].urlApi;
        this.store.get('token').then(function (result) {
            _this.token = result;
        });
    }
    CommonProvider.prototype.postContactResource = function (title, body, unit_uuid, user_sender_id) {
        var params = { title: title, body: body, user_sender_id: user_sender_id };
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json').set('x-access-token', this.token);
        return this.http.post(this.api + ("/unit/" + unit_uuid + "/message"), params, { reportProgress: true, observe: 'events', headers: headers }).pipe();
    };
    CommonProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__services_app_storage_service__["a" /* AppStorageService */]])
    ], CommonProvider);
    return CommonProvider;
}());

//# sourceMappingURL=common.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeatherProvider = /** @class */ (function () {
    function WeatherProvider(http) {
        this.http = http;
        this.apiKey = '1e4a0bdb251c64e4';
        console.log('Hello WeatherProvider Provider');
        this.url = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q/';
    }
    WeatherProvider.prototype.getWeather = function (state, city) {
        return this.http.get(this.url + state + '/' + city + '.json').map(function (res) { return res; });
    };
    WeatherProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], WeatherProvider);
    return WeatherProvider;
}());

//# sourceMappingURL=weather.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutTripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_navSelector__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {HomePage} from "../home/home";
var CheckoutTripPage = /** @class */ (function () {
    function CheckoutTripPage(nav, tripService, loadingCtrl, toastCtrl) {
        this.nav = nav;
        this.tripService = tripService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        // number of adults
        this.adults = 2;
        // date
        this.date = new Date();
        this.paymethods = 'creditcard';
        // set sample data
        this.trip = tripService.getItem(1);
    }
    // process send button
    CheckoutTripPage.prototype.send = function () {
        // send booking info
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        // show message
        var toast = this.toastCtrl.create({
            showCloseButton: true,
            cssClass: 'profile-bg',
            message: 'Book Activity Success!',
            duration: 3000,
            position: 'bottom'
        });
        loader.present();
        setTimeout(function () {
            loader.dismiss();
            toast.present();
            // back to home page
            //this.nav.setRoot(HomePage);
        }, 3000);
    };
    CheckoutTripPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-checkout-trip',template:/*ion-inline-start:"/home/marcelo/Documentos/sylat/sylat-app/src/pages/checkout-trip/checkout-trip.html"*/'<!-- -->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Activity Checkout</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="checkout-trip common-bg">\n  <!--trip information-->\n  <div class="trip-info card round">\n    <div class="trip-image border-bottom" [ngStyle]="{\'background-image\': \'url(\' + trip.thumb + \')\'}"></div>\n    <ion-grid padding>\n      <ion-row>\n        <ion-col width-66>\n          <h5 ion-text color="primary">{{ trip.name }}</h5>\n          <div>\n            <span class="bold">{{ trip.sub_name }}</span>\n            <br/>\n            <span ion-text color="dark">{{ adults }} Adults</span>\n          </div>\n          <div margin-top>\n            <span ion-text color="dark">{{ date | date: \'EEE, MMM dd\' }}</span>\n            <br/>\n            <span ion-text>{{ trip.location }}</span>\n          </div>\n          <div margin-top>\n            <ion-icon name="checkmark" class="text-green" *ngIf="trip.free_cancellation"></ion-icon>\n            <span ion-text *ngIf="trip.free_cancellation">Free cancellation</span>\n          </div>\n        </ion-col>\n        <ion-col col-4>\n          <span ion-text>Total with Tax</span>\n          <h5 ion-text color="primary" class="bold" no-margin>{{ trip.price_adult * adults | currency:\'USD\':true }}</h5>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n    <!--more info-->\n  <h5>Guest Details</h5>\n  <div class="card round" margin-top>\n\n    <ion-list no-margin>\n      <ion-item class="primary-bg">\n        <ion-avatar item-start>\n          <img src="assets/img/avatar.jpeg">\n        </ion-avatar>\n        <h2 ion-text class="text-white bold">João Firmino</h2>\n        <p ion-text class="text-secondary bold">User</p>\n      </ion-item>\n    </ion-list>\n\n    <div padding>\n      <h5 ion-text color="secondary">Other Guests</h5>\n\n      <ion-item no-padding>\n        <ion-label color="dark" stacked>Adult 1 Name:</ion-label>\n        <ion-input type="text" placeholder="Ex. Joe Doe" value=""></ion-input>\n      </ion-item>\n      <ion-item no-padding>\n        <ion-label color="dark" stacked>Child 1 Name:</ion-label>\n        <ion-input type="text" placeholder="Ex. Joe Doe" value=""></ion-input>\n      </ion-item>\n    </div>\n  </div>\n\n  <!--payment info-->\n  <h5>Payment Methods</h5>\n  <ion-segment color="secondary" [(ngModel)]="paymethods">\n    <ion-segment-button value="creditcard" >\n      Credit card\n    </ion-segment-button>\n    <ion-segment-button value="paypal">\n      PayPal\n    </ion-segment-button>\n  </ion-segment>\n\n  <div class="card round" margin-top margin-bottom>\n\n    <div [ngSwitch]="paymethods">\n      <ion-grid *ngSwitchCase="\'creditcard\'" padding>\n        <ion-row>\n          <ion-col no-padding text-center>\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojMTU2NUMwOyIgZD0iTSA0NSAzNSBDIDQ1IDM3LjIxMDkzOCA0My4yMTA5MzggMzkgNDEgMzkgTCA3IDM5IEMgNC43ODkwNjMgMzkgMyAzNy4yMTA5MzggMyAzNSBMIDMgMTMgQyAzIDEwLjc4OTA2MyA0Ljc4OTA2MyA5IDcgOSBMIDQxIDkgQyA0My4yMTA5MzggOSA0NSAxMC43ODkwNjMgNDUgMTMgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGRkZGRjsiIGQ9Ik0gMTUuMTg3NSAxOSBMIDEyLjU1ODU5NCAyNi44MzIwMzEgQyAxMi41NTg1OTQgMjYuODMyMDMxIDExLjg5NDUzMSAyMy41MTk1MzEgMTEuODI4MTI1IDIzLjEwMTU2MyBDIDEwLjMzMjAzMSAxOS42OTE0MDYgOC4xMjUgMTkuODgyODEzIDguMTI1IDE5Ljg4MjgxMyBMIDEwLjcyNjU2MyAzMCBMIDEwLjcyNjU2MyAyOS45OTYwOTQgTCAxMy44ODY3MTkgMjkuOTk2MDk0IEwgMTguMjU3ODEzIDE5IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiNGRkZGRkY7IiBkPSJNIDE3LjY4NzUgMzAgTCAyMC41NTg1OTQgMzAgTCAyMi4yOTY4NzUgMTkgTCAxOS4zOTA2MjUgMTkgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGRkZGRjsiIGQ9Ik0gMzguMDA3ODEzIDE5IEwgMzQuOTg4MjgxIDE5IEwgMzAuMjc3MzQ0IDMwIEwgMzMuMTI4OTA2IDMwIEwgMzMuNzE4NzUgMjguNDI5Njg4IEwgMzcuMzEyNSAyOC40Mjk2ODggTCAzNy42MTcxODggMzAgTCA0MC4yMzA0NjkgMzAgWiBNIDM0LjUxMTcxOSAyNi4zMjgxMjUgTCAzNi4wNzQyMTkgMjIuMTcxODc1IEwgMzYuODk0NTMxIDI2LjMyODEyNSBaICIvPjxwYXRoIHN0eWxlPSIgZmlsbDojRkZGRkZGOyIgZD0iTSAyNi4zNjcxODggMjIuMjA3MDMxIEMgMjYuMzY3MTg4IDIxLjYwMTU2MyAyNi44NjcxODggMjEuMTQ4NDM4IDI4LjI5Njg3NSAyMS4xNDg0MzggQyAyOS4yMjI2NTYgMjEuMTQ4NDM4IDMwLjI4NTE1NiAyMS44MjQyMTkgMzAuMjg1MTU2IDIxLjgyNDIxOSBMIDMwLjc1MzkwNiAxOS41MTU2MjUgQyAzMC43NTM5MDYgMTkuNTE1NjI1IDI5LjM5NDUzMSAxOSAyOC4wNjI1IDE5IEMgMjUuMDQyOTY5IDE5IDIzLjQ4NDM3NSAyMC40NDE0MDYgMjMuNDg0Mzc1IDIyLjI2OTUzMSBDIDIzLjQ4NDM3NSAyNS41NzgxMjUgMjcuNDY0ODQ0IDI1LjEyNSAyNy40NjQ4NDQgMjYuODIwMzEzIEMgMjcuNDY0ODQ0IDI3LjExMzI4MSAyNy4yMzQzNzUgMjcuNzg1MTU2IDI1LjU3NDIxOSAyNy43ODUxNTYgQyAyMy45MTQwNjMgMjcuNzg1MTU2IDIyLjgxNjQwNiAyNy4xNzU3ODEgMjIuODE2NDA2IDI3LjE3NTc4MSBMIDIyLjMyMDMxMyAyOS4zOTQ1MzEgQyAyMi4zMjAzMTMgMjkuMzk0NTMxIDIzLjM4NjcxOSAzMCAyNS40Mzc1IDMwIEMgMjcuNDk2MDk0IDMwIDMwLjM1NTQ2OSAyOC40NjA5MzggMzAuMzU1NDY5IDI2LjI0NjA5NCBDIDMwLjM1NTQ2OSAyMy41ODU5MzggMjYuMzY3MTg4IDIzLjM5NDUzMSAyNi4zNjcxODggMjIuMjA3MDMxIFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiNGRkMxMDc7IiBkPSJNIDEyLjIxMDkzOCAyNC45NDUzMTMgTCAxMS4yNDYwOTQgMjAuMTk1MzEzIEMgMTEuMjQ2MDk0IDIwLjE5NTMxMyAxMC44MDg1OTQgMTkuMTY3OTY5IDkuNjcxODc1IDE5LjE2Nzk2OSBDIDguNTM1MTU2IDE5LjE2Nzk2OSA1LjIzNDM3NSAxOS4xNjc5NjkgNS4yMzQzNzUgMTkuMTY3OTY5IEMgNS4yMzQzNzUgMTkuMTY3OTY5IDEwLjg5NDUzMSAyMC44Mzk4NDQgMTIuMjEwOTM4IDI0Ljk0NTMxMyBaICIvPjwvZz48L3N2Zz4=" alt="Visa" />\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojM0Y1MUI1OyIgZD0iTSA0NSAzNSBDIDQ1IDM3LjIxMDkzOCA0My4yMTA5MzggMzkgNDEgMzkgTCA3IDM5IEMgNC43ODkwNjMgMzkgMyAzNy4yMTA5MzggMyAzNSBMIDMgMTMgQyAzIDEwLjc4OTA2MyA0Ljc4OTA2MyA5IDcgOSBMIDQxIDkgQyA0My4yMTA5MzggOSA0NSAxMC43ODkwNjMgNDUgMTMgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGQzEwNzsiIGQ9Ik0gNDAgMjQgQyA0MCAyOS41MjM0MzggMzUuNTIzNDM4IDM0IDMwIDM0IEMgMjQuNDc2NTYzIDM0IDIwIDI5LjUyMzQzOCAyMCAyNCBDIDIwIDE4LjQ3NjU2MyAyNC40NzY1NjMgMTQgMzAgMTQgQyAzNS41MjM0MzggMTQgNDAgMTguNDc2NTYzIDQwIDI0IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiNGRjNEMDA7IiBkPSJNIDIyLjAxNTYyNSAzMCBDIDIxLjU1MDc4MSAyOS4zODI4MTMgMjEuMTUyMzQ0IDI4LjcxNDg0NCAyMC44Mzk4NDQgMjggTCAyNi4xNjQwNjMgMjggQyAyNi40NDE0MDYgMjcuMzYzMjgxIDI2LjY2MDE1NiAyNi42OTUzMTMgMjYuODAwNzgxIDI2IEwgMjAuMjAzMTI1IDI2IEMgMjAuMDcwMzEzIDI1LjM1NTQ2OSAyMCAyNC42ODc1IDIwIDI0IEwgMjcgMjQgQyAyNyAyMy4zMTI1IDI2LjkyOTY4OCAyMi42NDQ1MzEgMjYuODAwNzgxIDIyIEwgMjAuMTk5MjE5IDIyIEMgMjAuMzQzNzUgMjEuMzA0Njg4IDIwLjU1ODU5NCAyMC42MzY3MTkgMjAuODM5ODQ0IDIwIEwgMjYuMTY0MDYzIDIwIEMgMjUuODUxNTYzIDE5LjI4NTE1NiAyNS40NTMxMjUgMTguNjE3MTg4IDI0Ljk4ODI4MSAxOCBMIDIyLjAxNTYyNSAxOCBDIDIyLjQ0OTIxOSAxNy40MjE4NzUgMjIuOTQ1MzEzIDE2Ljg3ODkwNiAyMy40OTYwOTQgMTYuNDA2MjUgQyAyMS43NDYwOTQgMTQuOTEwMTU2IDE5LjQ4MDQ2OSAxNCAxNyAxNCBDIDExLjQ3NjU2MyAxNCA3IDE4LjQ3NjU2MyA3IDI0IEMgNyAyOS41MjM0MzggMTEuNDc2NTYzIDM0IDE3IDM0IEMgMjAuMjY5NTMxIDM0IDIzLjE2MDE1NiAzMi40MjU3ODEgMjQuOTg0Mzc1IDMwIFogIi8+PC9nPjwvc3ZnPg==" alt="mastercard">\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojRTFFN0VBOyIgZD0iTSA0NSAzNSBDIDQ1IDM3LjE5OTIxOSA0My4xOTkyMTkgMzkgNDEgMzkgTCA3IDM5IEMgNC44MDA3ODEgMzkgMyAzNy4xOTkyMTkgMyAzNSBMIDMgMTMgQyAzIDEwLjgwMDc4MSA0LjgwMDc4MSA5IDcgOSBMIDQxIDkgQyA0My4xOTkyMTkgOSA0NSAxMC44MDA3ODEgNDUgMTMgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGNkQwMDsiIGQ9Ik0gNDUgMzUgQyA0NSAzNy4xOTkyMTkgNDMuMTk5MjE5IDM5IDQxIDM5IEwgMTYgMzkgQyAxNiAzOSAzOS42MDE1NjMgMzUuMTk5MjE5IDQ1IDI0IFogTSAyMiAyNCBDIDIyIDI1LjY5OTIxOSAyMy4zMDA3ODEgMjcgMjUgMjcgQyAyNi42OTkyMTkgMjcgMjggMjUuNjk5MjE5IDI4IDI0IEMgMjggMjIuMzAwNzgxIDI2LjY5OTIxOSAyMSAyNSAyMSBDIDIzLjMwMDc4MSAyMSAyMiAyMi4zMDA3ODEgMjIgMjQgWiAiLz48cGF0aCBzdHlsZT0iICIgZD0iTSAxMS4xOTkyMTkgMjEgTCAxMi4zMDA3ODEgMjEgTCAxMi4zMDA3ODEgMjcgTCAxMS4xOTkyMTkgMjcgWiBNIDE3LjE5OTIxOSAyNCBDIDE3LjE5OTIxOSAyNS42OTkyMTkgMTguNSAyNyAyMC4xOTkyMTkgMjcgQyAyMC42OTkyMTkgMjcgMjEuMTAxNTYzIDI2Ljg5ODQzOCAyMS42MDE1NjMgMjYuNjk5MjE5IEwgMjEuNjAxNTYzIDI1LjM5ODQzOCBDIDIxLjE5OTIxOSAyNS44MDA3ODEgMjAuODAwNzgxIDI2IDIwLjE5OTIxOSAyNiBDIDE5LjEwMTU2MyAyNiAxOC4zMDA3ODEgMjUuMTk5MjE5IDE4LjMwMDc4MSAyNCBDIDE4LjMwMDc4MSAyMi44OTg0MzggMTkuMTAxNTYzIDIyIDIwLjE5OTIxOSAyMiBDIDIwLjY5OTIxOSAyMiAyMS4xMDE1NjMgMjIuMTk5MjE5IDIxLjYwMTU2MyAyMi42MDE1NjMgTCAyMS42MDE1NjMgMjEuMzAwNzgxIEMgMjEuMTAxNTYzIDIxLjEwMTU2MyAyMC42OTkyMTkgMjAuODk4NDM4IDIwLjE5OTIxOSAyMC44OTg0MzggQyAxOC41IDIxIDE3LjE5OTIxOSAyMi4zOTg0MzggMTcuMTk5MjE5IDI0IFogTSAzMC42MDE1NjMgMjQuODk4NDM4IEwgMjkgMjEgTCAyNy44MDA3ODEgMjEgTCAzMC4zMDA3ODEgMjcgTCAzMC44OTg0MzggMjcgTCAzMy4zOTg0MzggMjEgTCAzMi4xOTkyMTkgMjEgWiBNIDMzLjg5ODQzOCAyNyBMIDM3LjEwMTU2MyAyNyBMIDM3LjEwMTU2MyAyNiBMIDM1IDI2IEwgMzUgMjQuMzk4NDM4IEwgMzcgMjQuMzk4NDM4IEwgMzcgMjMuMzk4NDM4IEwgMzUgMjMuMzk4NDM4IEwgMzUgMjIgTCAzNy4xMDE1NjMgMjIgTCAzNy4xMDE1NjMgMjEgTCAzMy44OTg0MzggMjEgWiBNIDQxLjUgMjIuODAwNzgxIEMgNDEuNSAyMS42OTkyMTkgNDAuODAwNzgxIDIxIDM5LjUgMjEgTCAzNy44MDA3ODEgMjEgTCAzNy44MDA3ODEgMjcgTCAzOC44OTg0MzggMjcgTCAzOC44OTg0MzggMjQuNjAxNTYzIEwgMzkgMjQuNjAxNTYzIEwgNDAuNjAxNTYzIDI3IEwgNDIgMjcgTCA0MC4xOTkyMTkgMjQuNSBDIDQxIDI0LjMwMDc4MSA0MS41IDIzLjY5OTIxOSA0MS41IDIyLjgwMDc4MSBaIE0gMzkuMTk5MjE5IDIzLjgwMDc4MSBMIDM4Ljg5ODQzOCAyMy44MDA3ODEgTCAzOC44OTg0MzggMjIgTCAzOS4xOTkyMTkgMjIgQyAzOS44OTg0MzggMjIgNDAuMzAwNzgxIDIyLjMwMDc4MSA0MC4zMDA3ODEgMjIuODk4NDM4IEMgNDAuMzAwNzgxIDIzLjM5ODQzOCA0MCAyMy44MDA3ODEgMzkuMTk5MjE5IDIzLjgwMDc4MSBaIE0gNy42OTkyMTkgMjEgTCA2IDIxIEwgNiAyNyBMIDcuNjAxNTYzIDI3IEMgMTAuMTAxNTYzIDI3IDEwLjY5OTIxOSAyNC44OTg0MzggMTAuNjk5MjE5IDI0IEMgMTAuODAwNzgxIDIyLjE5OTIxOSA5LjUgMjEgNy42OTkyMTkgMjEgWiBNIDcuMzk4NDM4IDI2IEwgNy4xMDE1NjMgMjYgTCA3LjEwMTU2MyAyMiBMIDcuNSAyMiBDIDkgMjIgOS42MDE1NjMgMjMgOS42MDE1NjMgMjQgQyA5LjYwMTU2MyAyNC4zOTg0MzggOS41IDI2IDcuMzk4NDM4IDI2IFogTSAxNS4zMDA3ODEgMjMuMzAwNzgxIEMgMTQuNjAxNTYzIDIzIDE0LjM5ODQzOCAyMi44OTg0MzggMTQuMzk4NDM4IDIyLjYwMTU2MyBDIDE0LjM5ODQzOCAyMi4xOTkyMTkgMTQuODAwNzgxIDIyIDE1LjE5OTIxOSAyMiBDIDE1LjUgMjIgMTUuODAwNzgxIDIyLjEwMTU2MyAxNi4xMDE1NjMgMjIuNSBMIDE2LjY5OTIxOSAyMS42OTkyMTkgQyAxNi4xOTkyMTkgMjEuMTk5MjE5IDE1LjY5OTIxOSAyMSAxNSAyMSBDIDE0IDIxIDEzLjE5OTIxOSAyMS42OTkyMTkgMTMuMTk5MjE5IDIyLjY5OTIxOSBDIDEzLjE5OTIxOSAyMy41IDEzLjYwMTU2MyAyMy44OTg0MzggMTQuNjAxNTYzIDI0LjMwMDc4MSBDIDE1LjE5OTIxOSAyNC41IDE1LjY5OTIxOSAyNC42OTkyMTkgMTUuNjk5MjE5IDI1LjE5OTIxOSBDIDE1LjY5OTIxOSAyNS42OTkyMTkgMTUuMzAwNzgxIDI2IDE0LjgwMDc4MSAyNiBDIDE0LjMwMDc4MSAyNiAxMy44MDA3ODEgMjUuNjk5MjE5IDEzLjYwMTU2MyAyNS4xOTkyMTkgTCAxMi44OTg0MzggMjUuODk4NDM4IEMgMTMuMzk4NDM4IDI2LjY5OTIxOSAxNCAyNyAxNC44OTg0MzggMjcgQyAxNi4xMDE1NjMgMjcgMTYuODk4NDM4IDI2LjE5OTIxOSAxNi44OTg0MzggMjUuMTAxNTYzIEMgMTYuODk4NDM4IDI0LjE5OTIxOSAxNi41IDIzLjgwMDc4MSAxNS4zMDA3ODEgMjMuMzAwNzgxIFogIi8+PC9nPjwvc3ZnPg==" alt="discover">\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNTIgMjUyIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwyNTJ2LTI1MmgyNTJ2MjUyeiIgZmlsbD0ibm9uZSIvPjxnPjxnIGlkPSJzdXJmYWNlMSI+PHBhdGggZD0iTTIzNi4yNSwxODMuNzVjMCwxMS42MDc0MiAtOS4zOTI1OCwyMSAtMjEsMjFoLTE3OC41Yy0xMS42MDc0MiwwIC0yMSwtOS4zOTI1OCAtMjEsLTIxdi0xMTUuNWMwLC0xMS42MDc0MiA5LjM5MjU4LC0yMSAyMSwtMjFoMTc4LjVjMTEuNjA3NDIsMCAyMSw5LjM5MjU4IDIxLDIxeiIgZmlsbD0iIzE2YTA4NSIvPjxwYXRoIGQ9Ik0xMTYuODMzMDEsMTA1bC0xMS4wOTQ3MywyNC41ODg4N2wtMTEuMDMzMiwtMjQuNTg4ODdoLTE0LjE1MDM5djM1LjMxNDQ2bC0xNS43NzA1MSwtMzUuMzE0NDZoLTExLjkzNTU1bC0xNi4wOTg2MywzNi42NDc0Nmg5LjUzNjEzbDMuNTA2ODQsLTguMTgyNjJoMTguMDI2MzdsMy41ODg4Nyw4LjE4MjYyaDE4LjE5MDQzdi0yNy4yMTM4N2wxMi4wNTg1OSwyNy4yMTM4N2g4LjIwMzEzbDEyLjM0NTcxLC0yNi43NDIxOXYyNi43NDIxOWg5LjA0Mzk0di0zNi42NDc0NnpNNTMuMjE3NzcsMTI1LjU0ODgzbDUuMzczMDQsLTEyLjc5Njg3bDUuNTk4NjQsMTIuNzk2ODh6IiBmaWxsPSIjZmZmZmZmIi8+PHBhdGggZD0iTTE5OC44ODQ3NywxMjIuOTIzODNsMTYuMzY1MjMsLTE3LjgyMTI5aC0xMS42NDg0NGwtMTAuNDU4OTgsMTEuMzYxMzNsLTEwLjEzMDg2LC0xMS40NjM4N2gtMzYuMDExNzJ2MzYuNjQ3NDZoMzQuODQyNzdsMTAuOTcxNjgsLTEyLjEyMDEybDEwLjcwNTA4LDEyLjIyMjY2aDExLjYwNzQyek0xNzcuMDY0NDYsMTMzLjk1NzAzaC0yMS4wNDEwMnYtNy4yMzkyNmgyMC4xMzg2N3YtNi45NTIxNWgtMjAuMTM4Njd2LTYuODcwMTJsMjIuMjA5OTYsMC4wNjE1Mmw4LjkwMDM5LDkuOTY2OHoiIGZpbGw9IiNmZmZmZmYiLz48L2c+PC9nPjwvZz48L3N2Zz4=" alt="Amex">\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item no-padding>\n              <ion-input type="text" placeholder="Card Holder"></ion-input>\n<!--               <ion-icon name="person" item-end no-margin></ion-icon> -->\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item no-padding>\n              <ion-input placeholder="Card Number" type="number"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-4>\n            <ion-item no-padding>\n              <ion-select placeholder="MM" class="max-width full-width">\n                <ion-option value="01">01</ion-option>\n                <ion-option value="02">02</ion-option>\n                <ion-option value="03">03</ion-option>\n                <ion-option value="04">04</ion-option>\n                <ion-option value="05">05</ion-option>\n                <ion-option value="06">06</ion-option>\n                <ion-option value="07">07</ion-option>\n                <ion-option value="08">08</ion-option>\n                <ion-option value="09">09</ion-option>\n                <ion-option value="10">10</ion-option>\n                <ion-option value="11">11</ion-option>\n                <ion-option value="12">12</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n          <ion-col col-4>\n            <ion-item no-padding>\n              <ion-select placeholder="YY" class="max-width full-width">\n                <ion-option value="19">19</ion-option>\n                <ion-option value="20">20</ion-option>\n                <ion-option value="21">21</ion-option>\n                <ion-option value="22">22</ion-option>\n                <ion-option value="23">23</ion-option>\n                <ion-option value="24">24</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n          <ion-col col-4>\n            <ion-item no-padding>\n              <ion-input placeholder="CVV" type="number"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid *ngSwitchCase="\'paypal\'" padding>\n        <ion-row>\n          <ion-col no-padding text-center>\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojMTU2NUMwOyIgZD0iTSAxOC42OTkyMTkgMTMuNzY1NjI1IEwgMTguNzAzMTI1IDEzLjc2OTUzMSBDIDE4LjgwODU5NCAxMy4zMjQyMTkgMTkuMTg3NSAxMyAxOS42NjAxNTYgMTMgTCAzMy4xMzI4MTMgMTMgQyAzMy4xNDg0MzggMTMgMzMuMTY0MDYzIDEyLjk5MjE4OCAzMy4xODM1OTQgMTIuOTkyMTg4IEMgMzIuODk0NTMxIDguMjE0ODQ0IDI4Ljg4NjcxOSA2IDI1LjM1MTU2MyA2IEwgMTEuODc4OTA2IDYgQyAxMS40MDIzNDQgNiAxMS4wMjczNDQgNi4zMzU5MzggMTAuOTIxODc1IDYuNzc3MzQ0IEwgMTAuOTE3OTY5IDYuNzczNDM4IEwgNS4wMjczNDQgMzMuODEyNSBMIDUuMDQyOTY5IDMzLjgxMjUgQyA1LjAyNzM0NCAzMy44Nzg5MDYgNS4wMDM5MDYgMzMuOTM3NSA1LjAwMzkwNiAzNC4wMDc4MTMgQyA1LjAwMzkwNiAzNC41NjI1IDUuNDQ5MjE5IDM1IDYuMDAzOTA2IDM1IEwgMTQuMDc0MjE5IDM1IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiMwMzlCRTU7IiBkPSJNIDMzLjE4MzU5NCAxMi45OTIxODggQyAzMy4yMzQzNzUgMTMuODcxMDk0IDMzLjE3OTY4OCAxNC44MjQyMTkgMzIuOTUzMTI1IDE1Ljg3NSBDIDMxLjY3MTg3NSAyMS44NzEwOTQgMjcuMDQyOTY5IDI0Ljk5MjE4OCAyMS4zMjAzMTMgMjQuOTkyMTg4IEMgMjEuMzIwMzEzIDI0Ljk5MjE4OCAxNy44NDc2NTYgMjQuOTkyMTg4IDE3LjAwNzgxMyAyNC45OTIxODggQyAxNi40ODQzNzUgMjQuOTkyMTg4IDE2LjIzODI4MSAyNS4yOTY4NzUgMTYuMTI1IDI1LjUzMTI1IEwgMTQuMzg2NzE5IDMzLjU3ODEyNSBMIDE0LjA4MjAzMSAzNS4wMDc4MTMgTCAxNC4wNzQyMTkgMzUuMDA3ODEzIEwgMTIuODEyNSA0MC44MDQ2ODggTCAxMi44MjQyMTkgNDAuODA0Njg4IEMgMTIuODEyNSA0MC44NzEwOTQgMTIuNzg1MTU2IDQwLjkyOTY4OCAxMi43ODUxNTYgNDEgQyAxMi43ODUxNTYgNDEuNTU0Njg4IDEzLjIzNDM3NSA0MiAxMy43ODUxNTYgNDIgTCAyMS4xMTcxODggNDIgTCAyMS4xMzI4MTMgNDEuOTg4MjgxIEMgMjEuNjA1NDY5IDQxLjk4NDM3NSAyMS45ODA0NjkgNDEuNjQ0NTMxIDIyLjA3ODEyNSA0MS4yMDMxMjUgTCAyMi4wOTM3NSA0MS4xODc1IEwgMjMuOTA2MjUgMzIuNzY5NTMxIEMgMjMuOTA2MjUgMzIuNzY5NTMxIDI0LjAzMTI1IDMxLjk2ODc1IDI0Ljg3ODkwNiAzMS45Njg3NSBDIDI1LjcyMjY1NiAzMS45Njg3NSAyOS4wNTQ2ODggMzEuOTY4NzUgMjkuMDU0Njg4IDMxLjk2ODc1IEMgMzQuNzc3MzQ0IDMxLjk2ODc1IDM5LjQ1NzAzMSAyOC44NjMyODEgNDAuNzM4MjgxIDIyLjg2NzE4OCBDIDQyLjE3OTY4OCAxNi4xMDU0NjkgMzcuMzU5Mzc1IDEzLjAxOTUzMSAzMy4xODM1OTQgMTIuOTkyMTg4IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiMyODM1OTM7IiBkPSJNIDE5LjY2MDE1NiAxMyBDIDE5LjE4NzUgMTMgMTguODA4NTk0IDEzLjMyNDIxOSAxOC43MDMxMjUgMTMuNzY5NTMxIEwgMTguNjk5MjE5IDEzLjc2NTYyNSBMIDE2LjEyNSAyNS41MzEyNSBDIDE2LjIzODI4MSAyNS4yOTY4NzUgMTYuNDg0Mzc1IDI0Ljk5MjE4OCAxNy4wMDM5MDYgMjQuOTkyMTg4IEMgMTcuODQ3NjU2IDI0Ljk5MjE4OCAyMS4yMzgyODEgMjQuOTkyMTg4IDIxLjIzODI4MSAyNC45OTIxODggQyAyNi45NjQ4NDQgMjQuOTkyMTg4IDMxLjY3MTg3NSAyMS44NzEwOTQgMzIuOTUzMTI1IDE1Ljg3ODkwNiBDIDMzLjE3OTY4OCAxNC44MjQyMTkgMzMuMjM0Mzc1IDEzLjg3MTA5NCAzMy4xODM1OTQgMTIuOTk2MDk0IEMgMzMuMTY0MDYzIDEyLjk5MjE4OCAzMy4xNDg0MzggMTMgMzMuMTMyODEzIDEzIFogIi8+PC9nPjwvc3ZnPg==" alt="paypal">\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item no-padding>\n              <ion-input type="mail" placeholder="E-mail"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item no-padding>\n              <ion-input placeholder="Password" type="password"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n  </div>\n\n  <!--submit button-->\n  <button ion-button class="round" color="primary" margin-top full tappable (click)="send()">SEND</button>\n</ion-content>\n'/*ion-inline-end:"/home/marcelo/Documentos/sylat/sylat-app/src/pages/checkout-trip/checkout-trip.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_navSelector__["a" /* TripService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], CheckoutTripPage);
    return CheckoutTripPage;
}());

//# sourceMappingURL=checkout-trip.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterPage = /** @class */ (function () {
    function RegisterPage(nav) {
        this.nav = nav;
    }
    // register and go to home page
    RegisterPage.prototype.register = function () {
        //this.nav.setRoot(HomePage);
    };
    // go to login page
    RegisterPage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/home/marcelo/Documentos/sylat/sylat-app/src/pages/register/register.html"*/'<!-- -->\n<ion-content class="auth-page">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding text-center>\n      <div class="logo"></div>\n      <h2 ion-text class="text-primary">\n        <strong>Ionic 3</strong> Start Theme\n      </h2>\n    </div>\n\n    <!-- Login form -->\n    <form class="list-form">\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="person" item-start class="text-primary"></ion-icon>\n          Full Name\n        </ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n          Email\n        </ion-label>\n        <ion-input type="email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n          Password\n        </ion-label>\n        <ion-input type="password"></ion-input>\n      </ion-item>\n    </form>\n\n    <div margin-top>\n      <button ion-button block color="dark" tappable (click)="register()">\n        SIGN UP\n      </button>\n\n      <p text-center ion-text color="secondary">Or Sign Up with:</p>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-facebook">\n              <ion-icon name="logo-facebook"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-twitter">\n              <ion-icon name="logo-twitter"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-gplus">\n              <ion-icon name="logo-googleplus"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <!-- Other links -->\n    <div text-center margin-top>\n      <span ion-text color="primary" tappable (click)="login()">I have an account</span>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/marcelo/Documentos/sylat/sylat-app/src/pages/register/register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_app_storage_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(http, store) {
        this.http = http;
        this.store = store;
        this.token = this.store.get('token');
        this.api = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].urlApi;
    }
    AuthProvider.prototype.login = function (user) {
        var params = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        return this.http.post(this.api + '/access-token', params, {
            reportProgress: true, observe: 'events', headers: headers
        }).pipe();
    };
    AuthProvider.prototype.getUser = function (user_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json').set('Authorization', 'Token ' + this.token);
        return this.http.get(this.api + ("/user/" + user_id), { reportProgress: true, observe: 'events', headers: headers }).pipe();
    };
    AuthProvider.prototype.getUserToken = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json').set('x-access-token', token);
        return this.http.get(this.api + ("/access-token/" + token), { reportProgress: true, observe: 'events', headers: headers }).pipe();
    };
    AuthProvider.prototype.getUserEmail = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json').set('Authorization', 'Token ' + this.token);
        return this.http.get(this.api + ("/user/email/" + email), { reportProgress: true, observe: 'events', headers: headers }).pipe();
    };
    AuthProvider.prototype.logout = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json').set('Authorization', 'Token ' + token);
        return this.http.post(this.api + '/logout/', null, { reportProgress: true, observe: 'events', headers: headers }).pipe();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__services_app_storage_service__["a" /* AppStorageService */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalWeatherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_weather__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { HttpErrorResponse } from '@angular/common/http';
var LocalWeatherPage = /** @class */ (function () {
    function LocalWeatherPage(navCtrl, weatherProvider, storage) {
        this.navCtrl = navCtrl;
        this.weatherProvider = weatherProvider;
        this.storage = storage;
        this.locationList = [
            { city: 'Los Angeles', state: 'CA' },
            { city: 'Miami', state: 'FL' },
            { city: 'New York', state: 'NY' },
            { city: 'Seattle', state: 'WA' }
        ];
    }
    LocalWeatherPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('location').then(function (val) {
            if (val != null) {
                _this.location = JSON.parse(val);
            }
            else {
                _this.location = {
                    state: 'NY',
                    city: 'New York'
                };
            }
            _this.getWeather(_this.location);
        });
    };
    LocalWeatherPage.prototype.getWeather = function (location) {
        var _this = this;
        if (typeof location === 'string') {
            this.location = JSON.parse(location);
            console.log(this.location);
        }
        else {
            this.location = location;
        }
        this.weatherProvider.getWeather(this.location.state, this.location.city).subscribe(function (weather) {
            _this.weather = weather.current_observation;
        });
    };
    LocalWeatherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-local-weather',template:/*ion-inline-start:"/home/marcelo/Documentos/sylat/sylat-app/src/pages/local-weather/local-weather.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Local Weather</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="common-bg">\n  <ion-card class="full-width" no-margin margin-bottom>\n    <ion-card-content no-padding>\n\n      <ion-item>\n        <ion-label class="text-1x bold">Select Local</ion-label>\n        <ion-select [(ngModel)]="location" (ionChange)="getWeather(location)">\n          <ion-option *ngFor="let location of locationList" [value]="location">{{ location.city }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-grid class="card" padding *ngIf="weather">\n    <ion-row>\n        <ion-col width-50 offset-25>\n            <h2 class="location text-dark">{{weather.display_location.full}}</h2>\n            <div class="icon"><img src="{{weather.icon_url}}" alt="weather"></div>\n            <h3 class="desc">{{weather.weather}}</h3>\n            <h1 class="temp">{{weather.temp_c}}&deg;</h1>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col width-100>\n            <ion-list>\n\n                <ion-item>\n                <strong>Temp:</strong> {{weather.temperature_string}}\n                </ion-item>\n                 <ion-item>\n                    <strong>Relative Humidity:</strong> {{weather.relative_humidity}}\n                </ion-item>\n                 <ion-item>\n                    <strong>Dewpoint:</strong> {{weather.dewpoint_string}}\n                </ion-item>\n                 <ion-item>\n                    <strong>Visibility:</strong> {{weather.visibility_km}}\n                </ion-item>\n                <ion-item>\n                    <strong>Heat Index:</strong> {{weather.heat_index_string}}\n                </ion-item>\n\n            </ion-list>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/marcelo/Documentos/sylat/sylat-app/src/pages/local-weather/local-weather.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_weather__["a" /* WeatherProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], LocalWeatherPage);
    return LocalWeatherPage;
}());

//# sourceMappingURL=local-weather.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(407);



// this is the magic wand
Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppStorageService = /** @class */ (function () {
    function AppStorageService(storage) {
        this.storage = storage;
    }
    AppStorageService.prototype.set = function (title, value) {
        this.storage.set(title, value);
    };
    AppStorageService.prototype.get = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(value).then(function (val) {
                console.log('val', val);
                resolve(val);
            });
        });
        //return promise;
    };
    AppStorageService.prototype.remove = function () {
        this.storage.clear();
    };
    AppStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], AppStorageService);
    return AppStorageService;
}());

//# sourceMappingURL=app-storage-service.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_keyboard__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_activity_service__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_navSelector__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_weather__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_app_storage_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_checkout_trip_checkout_trip__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_question_question__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_contact_contact__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_godson_list_godson_list__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_godson_details_godson_details__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_notifications_notifications__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_register_register__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_search_location_search_location__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_trip_detail_trip_detail__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_trips_trips__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_local_weather_local_weather__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_auth_auth__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_user_user__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_common_common__ = __webpack_require__(238);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































// import services
// end import services
// end import services
// import pages
// end import pages
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_checkout_trip_checkout_trip__["a" /* CheckoutTripPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_question_question__["a" /* QuestionPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_godson_list_godson_list__["a" /* GodsonListPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_godson_details_godson_details__["a" /* GodsonDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_local_weather_local_weather__["a" /* LocalWeatherPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_search_location_search_location__["a" /* SearchLocationPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_trip_detail_trip_detail__["a" /* TripDetailPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_trips_trips__["a" /* TripsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/godson-details/godson-details.module#GodsonDetailsPageModule', name: 'GodsonDetailsPage', segment: 'godson-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/godson-list/godson-list.module#GodsonListPageModule', name: 'GodsonListPage', segment: 'godson-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/question/question.module#QuestionPageModule', name: 'QuestionPage', segment: 'question', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_checkout_trip_checkout_trip__["a" /* CheckoutTripPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_question_question__["a" /* QuestionPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_godson_list_godson_list__["a" /* GodsonListPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_godson_details_godson_details__["a" /* GodsonDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_local_weather_local_weather__["a" /* LocalWeatherPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_search_location_search_location__["a" /* SearchLocationPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_trip_detail_trip_detail__["a" /* TripDetailPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_trips_trips__["a" /* TripsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_9__services_activity_service__["a" /* ActivityService */],
                __WEBPACK_IMPORTED_MODULE_10__services_navSelector__["a" /* TripService */],
                __WEBPACK_IMPORTED_MODULE_11__services_weather__["a" /* WeatherProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_12__services_app_storage_service__["a" /* AppStorageService */],
                __WEBPACK_IMPORTED_MODULE_31__providers_common_common__["a" /* CommonProvider */],
            ],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_activities__ = __webpack_require__(467);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivityService = /** @class */ (function () {
    function ActivityService() {
        this.activities = __WEBPACK_IMPORTED_MODULE_1__mock_activities__["a" /* ACTIVITIES */];
    }
    ActivityService.prototype.getAll = function () {
        return this.activities;
    };
    ActivityService.prototype.getItem = function (id) {
        for (var i = 0; i < this.activities.length; i++) {
            if (this.activities[i].id === parseInt(id)) {
                return this.activities[i];
            }
        }
        return null;
    };
    ActivityService.prototype.remove = function (item) {
        this.activities.splice(this.activities.indexOf(item), 1);
    };
    ActivityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ActivityService);
    return ActivityService;
}());

//# sourceMappingURL=activity-service.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACTIVITIES; });
var ACTIVITIES = [];
//# sourceMappingURL=mock-activities.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NAVGODSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NAVGODFATHER; });
/**
 * 1: Responder preguntas
 * 2: algo
 * 3: Perfil
 * 4: Contacto
 * 5: Lista ahijados
 * 6: algo
 */
var NAVGODSON = [
    {
        id: 1,
        name: "Responder preguntas",
        thumb: "assets/img/trip/thumb/trip_1.jpg",
    },
    {
        id: 3,
        name: "Ver perfil",
        thumb: "assets/img/trip/thumb/trip_3.jpg",
    },
    {
        id: 4,
        name: "Contactar a la escuela",
        thumb: "assets/img/trip/thumb/trip_4.jpg",
    }
];
var NAVGODFATHER = [
    {
        id: 5,
        name: "Lista de ahijados/as",
        thumb: "assets/img/trip/thumb/trip_1.jpg",
    },
    {
        id: 6,
        name: "Preguntas realizadas",
        thumb: "assets/img/trip/thumb/trip_2.jpg",
    },
    {
        id: 3,
        name: "Ver perfil",
        thumb: "assets/img/trip/thumb/trip_3.jpg",
    },
    {
        id: 4,
        name: "Contactar a la escuela",
        thumb: "assets/img/trip/thumb/trip_4.jpg",
    }
];
/*{
  id: 1,
  name: "Responder preguntas",
  price_adult: 60,
  price_child: 30,
  time: "12h",
  free_cancellation: 1,
  electric_voucher: 1,
  sub_name: "English Commentary Tour",
  thumb: "assets/img/trip/thumb/trip_1.jpg",
  description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
  location: "Rio de Janeiro, Brazil",
  images: [
    "assets/img/trip/thumb/trip_5.jpg",
    "assets/img/trip/thumb/trip_6.jpg",
    "assets/img/trip/thumb/trip_7.jpg",
    "assets/img/trip/thumb/trip_8.jpg",
  ],
  highlights: [
    "Numerous kiosks",
    "First in a string of Atlantic Ocean-facing beaches",
    "Sand is flanked by mountains in the background",
    "Swing in the turquoise waters",
    "Water Sports",
  ]
},*/ 
//# sourceMappingURL=mock-nav.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_local_weather_local_weather__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, keyboard) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.keyboard = keyboard;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        this.appMenuItems = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], icon: 'home' },
            { title: 'Local Weather', component: __WEBPACK_IMPORTED_MODULE_7__pages_local_weather_local_weather__["a" /* LocalWeatherPage */], icon: 'partly-sunny' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            //*** Control Splash Screen
            // this.splashScreen.show();
            // this.splashScreen.hide();
            //*** Control Status Bar
            _this.statusBar.styleDefault();
            _this.statusBar.overlaysWebView(false);
            //*** Control Keyboard
            _this.keyboard.disableScroll(true);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/marcelo/Documentos/sylat/sylat-app/src/app/app.html"*/'<ion-menu side="left" id="authenticated" [content]="content">\n  <ion-header>\n    <ion-toolbar class="user-profile">\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4>\n              <div class="user-avatar">\n                <img src="../assets/img/avatar.jpeg">\n              </div>\n          </ion-col>\n          <ion-col padding-top col-8>\n            <h2 ion-text class="no-margin bold text-white">\n              João Firmino\n            </h2>\n            <span ion-text color="light">Customer</span>\n          </ion-col>\n        </ion-row>\n\n        <ion-row no-padding class="other-data">\n          <ion-col no-padding class="column">\n            <button ion-button icon-left small full color="light" menuClose disabled>\n              <ion-icon name="contact"></ion-icon>\n              Edit Profile\n            </button>\n          </ion-col>\n          <ion-col no-padding class="column">\n            <button ion-button icon-left small full color="light" menuClose (click)="logout()">\n              <ion-icon name="log-out"></ion-icon>\n              Log Out\n            </button>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content color="primary">\n\n    <ion-list class="user-list">\n      <button ion-item menuClose class="text-1x" *ngFor="let menuItem of appMenuItems" (click)="openPage(menuItem)">\n        <ion-icon item-left [name]="menuItem.icon" color="primary"></ion-icon>\n        <span ion-text color="primary">{{menuItem.title}}</span>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/marcelo/Documentos/sylat/sylat-app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = /** @class */ (function () {
    function SettingsPage(nav) {
        this.nav = nav;
    }
    // logout
    SettingsPage.prototype.logout = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/home/marcelo/Documentos/sylat/sylat-app/src/pages/settings/settings.html"*/'<!-- -->\n<ion-header class="no-shadow">\n\n  <ion-navbar class="no-border">\n    <ion-title>\n      <ion-icon name="cog" class="text-primary"></ion-icon>\n      <span class="text-primary">Settings</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="common-bg">\n  <!-- User settings-->\n  <ion-item-group>\n    <ion-item-divider color="secondary" class="bold">User Settings</ion-item-divider>\n    <ion-item>\n      <ion-label>Language</ion-label>\n      <ion-select [(ngModel)]="language" cancelText="Cancel" okText="OK">\n        <ion-option value="en-US" selected="true">English (US)</ion-option>\n        <ion-option value="en-GB">English (UK)</ion-option>\n        <ion-option value="en-CA">English (CA)</ion-option>\n        <ion-option value="en-AU">English (AU)</ion-option>\n        <ion-option value="en-IN">English (IN)</ion-option>\n        <ion-option value="pt-BR">Portuguese (BR)</ion-option>\n        <ion-option value="pt-PT">Portuguese (PT)</ion-option>\n        <ion-option value="es-ES">Spanish (ES)</ion-option>\n        <ion-option value="es-AR">Spanish (AR)</ion-option>\n        <ion-option value="es-CO">Spanish (CO)</ion-option>\n        <ion-option value="es-CL">Spanish (CL)</ion-option>\n        <ion-option value="es-MX">Spanish (MX)</ion-option>\n        <ion-option value="zh-CN">Chinese (CN)</ion-option>\n        <ion-option value="zh-TW">Chinese (TW)</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Currency</ion-label>\n      <ion-select [(ngModel)]="currency" cancelText="Cancel" okText="OK">\n        <ion-option value="USD" selected="true">U.S Dollar (US$)</ion-option>\n        <ion-option value="EUR">Euro (€)</ion-option>\n        <ion-option value="GBP">Pound (£)</ion-option>\n        <ion-option value="BRL">Brazilian Real (R$)</ion-option>\n        <ion-option value="CNY">Chinese Yuan</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Units</ion-label>\n      <ion-select [(ngModel)]="munits" cancelText="Cancel" okText="OK">\n        <ion-option value="M" selected="true">Miles (ft²)</ion-option>\n        <ion-option value="K">Kilometers (m²)</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Notifications?</ion-label>\n      <ion-toggle checked="true"></ion-toggle>\n    </ion-item>\n  </ion-item-group>\n  <!-- App settings-->\n  <ion-item-group>\n    <ion-item-divider color="secondary" class="bold">App Settings</ion-item-divider>\n    <ion-item>\n      <span>Clear Private Data</span>\n    </ion-item>\n    <ion-item>\n      <ion-label>Push Notifications?</ion-label>\n      <ion-toggle checked="false"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <span>Privacy Policy</span>\n    </ion-item>\n  </ion-item-group>  \n\n  <!--sign out button-->\n  <button ion-button color="primary" full tappable (click)="logout()">LOG OUT</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/marcelo/Documentos/sylat/sylat-app/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    NotificationsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"/home/marcelo/Documentos/sylat/sylat-app/src/pages/notifications/notifications.html"*/'<ion-list class="no-margin">\n  <ion-list-header class="no-margin">\n  	<ion-icon name="notifications" color="primary"></ion-icon>\n  	<span ion-text color="primary" class="bold">Notifications</span>\n  </ion-list-header>\n  <button ion-item color="secondary" class="text-1x" tappable (click)="close()">\n  	<ion-icon name="mail"></ion-icon>\n  	New booking success!\n  </button>\n  <button ion-item color="secondary" class="text-1x" tappable (click)="close()">\n  	<ion-icon name="mail"></ion-icon>\n  	Activity rescheduled\n  </button>\n  <button ion-item class="text-1x" tappable (click)="close()">\n  	<ion-icon name="mail-open" color="secondary"></ion-icon>\n  	<span ion-text color="secondary">Activity rescheduled</span>\n  </button>\n  <button ion-item class="text-1x" tappable (click)="close()">\n  	<ion-icon name="mail-open" color="secondary"></ion-icon>\n  	<span ion-text color="secondary">Activity rescheduled</span>\n  </button>\n</ion-list>\n'/*ion-inline-end:"/home/marcelo/Documentos/sylat/sylat-app/src/pages/notifications/notifications.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {SearchCarsPage} from "../search-cars/search-cars";
var SearchLocationPage = /** @class */ (function () {
    function SearchLocationPage(storage, nav, navParams) {
        this.storage = storage;
        this.nav = nav;
        this.navParams = navParams;
        // places
        this.places = {
            nearby: [
                {
                    id: 1,
                    name: "Current Location"
                },
                {
                    id: 2,
                    name: "Rio de Janeiro, Brazil"
                },
                {
                    id: 3,
                    name: "São Paulo, Brazil"
                },
                {
                    id: 4,
                    name: "New York, United States"
                },
                {
                    id: 5,
                    name: "London, United Kingdom"
                },
                {
                    id: 6,
                    name: "Same as pickup"
                }
            ],
            recent: [
                {
                    id: 1,
                    name: "Rio de Janeiro"
                }
            ]
        };
        this.fromto = this.navParams.data;
    }
    // search by item
    SearchLocationPage.prototype.searchBy = function (item) {
        if (this.fromto === 'from') {
            this.storage.set('pickup', item.name);
        }
        if (this.fromto === 'to') {
            this.storage.set('dropOff', item.name);
        }
        // this.nav.push(SearchCarsPage);
        this.nav.pop();
    };
    SearchLocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search-location',template:/*ion-inline-start:"/home/marcelo/Documentos/sylat/sylat-app/src/pages/search-location/search-location.html"*/'<!-- # -->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-input placeholder="Enter Destination" padding-left autofocus></ion-input>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div class="list-no-border">\n    <!--nearby places-->\n    <ion-item *ngFor="let item of places.nearby" tappable (click)="searchBy(item)">\n      <ion-icon name="md-locate" item-left color="primary"></ion-icon>\n      <span ion-text color="primary">{{ item.name }}</span>\n    </ion-item>\n    <!--recent places-->\n    <ion-item *ngFor="let item of places.recent" tappable (click)="searchBy(item)">\n      <ion-icon name="md-time" item-left color="primary"></ion-icon>\n      <span ion-text color="primary">{{ item.name }}</span>\n    </ion-item>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/marcelo/Documentos/sylat/sylat-app/src/pages/search-location/search-location.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SearchLocationPage);
    return SearchLocationPage;
}());

//# sourceMappingURL=search-location.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_navSelector__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trip_detail_trip_detail__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TripsPage = /** @class */ (function () {
    function TripsPage(nav, tripService) {
        this.nav = nav;
        this.tripService = tripService;
        // set sample data
        //this.trips = tripService.getAll();
    }
    // view trip detail
    TripsPage.prototype.viewDetail = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__trip_detail_trip_detail__["a" /* TripDetailPage */], { id: id });
    };
    TripsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-trips',template:/*ion-inline-start:"/home/marcelo/Documentos/sylat/sylat-app/src/pages/trips/trips.html"*/'<!-- -->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      <span ion-text>Activities</span>\n    </ion-title>\n  </ion-navbar>\n\n  <!--  -->\n  <ion-toolbar padding color="light">\n    <p ion-text no-margin class="text-white">\n      <strong>4</strong> results found!\n    </p>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding class="trips detail-bg">\n  <!--list of trips-->\n  <div class="trip card" *ngFor="let trip of trips" tappable (click)="viewDetail(trip.id)" margin-bottom>\n    <div class="background border-bottom" [ngStyle]="{\'background-image\': \'url(\' + trip.thumb + \')\'}">\n      <div class="background-filter rlt">\n        <div class="align-bottom" padding-left padding-right>\n          <h6 class="pull-left text-white" ion-text>{{ trip.name }}</h6>\n          <h6 class="pull-right text-white" ion-text>{{ trip.price_adult | currency:\'USD\':true }}</h6>\n          <div class="clear"></div>\n        </div>\n      </div>\n    </div>\n    <div class="padding-sm primary-bg">\n      <ion-icon name="time" class="text-white"></ion-icon>\n      <span ion-text class="text-white">{{ trip.time }}</span>\n      <span class="pull-right" ion-text color="light"><strong>per adult</strong> (childs has <span ion-text  class="text-green bold">50% OFF</span>)</span>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/marcelo/Documentos/sylat/sylat-app/src/pages/trips/trips.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_navSelector__["a" /* TripService */]])
    ], TripsPage);
    return TripsPage;
}());

//# sourceMappingURL=trips.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_app_storage_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserProvider = /** @class */ (function () {
    function UserProvider(http, store) {
        var _this = this;
        this.http = http;
        this.store = store;
        this.api = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].urlApi;
        this.store.get('token').then(function (result) {
            _this.token = result;
        });
    }
    UserProvider.prototype.getUserCollection = function (query) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json').set('x-access-token', this.token);
        return this.http.get(this.api + ("/user?godfather_id=" + query.godfather_id + "&unit_id=" + query.unit_id), { reportProgress: true, observe: 'events', headers: headers }).pipe();
    };
    UserProvider.prototype.getUserResource = function (uuid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json').set('x-access-token', this.token);
        return this.http.get(this.api + ("/user/" + uuid), { reportProgress: true, observe: 'events', headers: headers }).pipe();
    };
    UserProvider.prototype.postUserCollection = function (user, rolId, unitId) {
        var params = Object.assign(user, { rol_id: rolId, unit_id: unitId });
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json').set('x-access-token', this.token);
        return this.http.post(this.api + "/user", params, { reportProgress: true, observe: 'events', headers: headers }).pipe();
    };
    UserProvider.prototype.putUserCollection = function (user_uuid, user) {
        var params = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json').set('x-access-token', this.token);
        return this.http.patch(this.api + ("/user/" + user_uuid), params, { reportProgress: true, observe: 'events', headers: headers }).pipe();
    };
    UserProvider.prototype.deleteUserResource = function (user_uuid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json').set('x-access-token', this.token);
        return this.http.delete(this.api + ("/user/" + user_uuid), { reportProgress: true, observe: 'events', headers: headers }).pipe();
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__services_app_storage_service__["a" /* AppStorageService */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_nav__ = __webpack_require__(468);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TripService = /** @class */ (function () {
    function TripService() {
        this.nav_godson = __WEBPACK_IMPORTED_MODULE_1__mock_nav__["b" /* NAVGODSON */];
        this.nav_godfather = __WEBPACK_IMPORTED_MODULE_1__mock_nav__["a" /* NAVGODFATHER */];
    }
    TripService.prototype.getNavGodson = function () {
        return this.nav_godson;
    };
    TripService.prototype.getNavGodfather = function () {
        return this.nav_godfather;
    };
    TripService.prototype.getItem = function (id) {
        for (var i = 0; i < this.nav_godson.length; i++) {
            if (this.nav_godson[i].id === parseInt(id)) {
                return this.nav_godson[i];
            }
        }
        return null;
    };
    TripService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TripService);
    return TripService;
}());

//# sourceMappingURL=navSelector.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_app_storage_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(nav, forgotCtrl, menu, toastCtrl, authProvider, formbuilder, store) {
        this.nav = nav;
        this.forgotCtrl = forgotCtrl;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.authProvider = authProvider;
        this.formbuilder = formbuilder;
        this.store = store;
        this.menu.swipeEnable(false);
    }
    LoginPage.prototype.ngOnInit = function () {
        this.loginForm = this.formbuilder.group({
            email: [
                '',
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].email])
            ],
            password: [
                '',
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(4)])
            ]
        });
    };
    // go to register page
    LoginPage.prototype.register = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    // login and go to home page
    LoginPage.prototype.login = function () {
        var _this = this;
        console.log(this.loginForm.value);
        //this.nav.setRoot(HomePage);
        this.authProvider.login(this.loginForm.value).subscribe(function (event) {
            if (event.body) {
                _this.store.set('token', event.body.access_token);
                _this.store.set('rol', event.body.user.rol);
                _this.store.set('user_uuid', event.body.user.uuid);
                _this.store.set('unit_id', event.body.user.unit_id);
                _this.store.set('user_id', event.body.user.user_id);
                if (event.body.user.rol == 'godson' || event.body.user.rol == 'godfather') {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: 'No tiene permisos para ingresar a la app',
                        duration: 3000,
                        position: 'top',
                        cssClass: 'dark-trans',
                        closeButtonText: 'Cerrar',
                        showCloseButton: true
                    });
                    toast.present();
                }
            }
        });
    };
    LoginPage.prototype.forgotPass = function () {
        var _this = this;
        var forgot = this.forgotCtrl.create({
            title: 'Forgot Password?',
            message: "Enter you email address to send a reset link password.",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Email',
                    type: 'email'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        console.log('Send clicked');
                        var toast = _this.toastCtrl.create({
                            message: 'Email was sended successfully',
                            duration: 3000,
                            position: 'top',
                            cssClass: 'dark-trans',
                            closeButtonText: 'OK',
                            showCloseButton: true
                        });
                        toast.present();
                    }
                }
            ]
        });
        forgot.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/marcelo/Documentos/sylat/sylat-app/src/pages/login/login.html"*/'<!-- -->\n<ion-content padding class="animated fadeIn login auth-page">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding-horizontal text-center class="animated fadeInDown">\n      <div class="logo"></div>\n      <h2 ion-text class="text-primary">\n        <strong>Sylat</strong> valdivia\n      </h2>\n    </div>\n\n    <!-- Login form -->\n    <form class="list-form" [formGroup]="loginForm">\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n          Correo electrónico\n        </ion-label>\n        <ion-input type="email" formControlName="email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n          Contraseña\n        </ion-label>\n        <ion-input type="password" formControlName="password"></ion-input>\n      </ion-item>\n    </form>\n\n    <p text-right ion-text color="secondary" tappable (click)="forgotPass()"><strong>Olvidaste tu contraseña?</strong></p>\n\n    <div>\n      <button ion-button icon-start block color="dark" tappable (click)="login()">\n        <ion-icon name="log-in"></ion-icon>\n        INGRESAR\n      </button>\n\n      <!--<p text-center ion-text color="secondary">Or Sign in with:</p>-->\n\n      <!--<ion-grid>\n        <ion-row>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-facebook">\n              <ion-icon name="logo-facebook"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-twitter">\n              <ion-icon name="logo-twitter"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-gplus">\n              <ion-icon name="logo-googleplus"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>-->\n\n    </div>\n\n\n    <!-- Other links -->\n    <!--<div text-center margin-top>\n      <span ion-text color="secondary" tappable (click)="register()">New here? <strong>Sign up</strong></span>\n    </div>-->\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/marcelo/Documentos/sylat/sylat-app/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6__services_app_storage_service__["a" /* AppStorageService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[287]);
//# sourceMappingURL=main.js.map