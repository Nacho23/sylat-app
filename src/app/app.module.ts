import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';
import { HttpModule } from '@angular/http';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';

//import { Ng5SliderModule } from 'ng5-slider';

import {ActivityService} from "../services/activity-service";
import {TripService} from "../services/navSelector";
import {WeatherProvider} from "../services/weather";
import {AppStorageService} from '../services/app-storage-service'

import {MyApp} from "./app.component";

import {SettingsPage} from "../pages/settings/settings";
import {CheckoutTripPage} from "../pages/checkout-trip/checkout-trip";
import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {QuestionPage} from '../pages/question/question';
import {ProfilePage} from '../pages/profile/profile';
import {ContactPage} from '../pages/contact/contact';
import {GodsonListPage} from '../pages/godson-list/godson-list';
import {GodsonDetailsPage} from '../pages/godson-details/godson-details';
import {NotificationsPage} from "../pages/notifications/notifications";
import {HistoryPage} from "../pages/history/history";
import {RegisterPage} from "../pages/register/register";
import { QuestionDetailsPage } from '../pages/question-details/question-details';
import {SearchLocationPage} from "../pages/search-location/search-location";
import {ListQuestionPage} from "../pages/listQuestions/list-question";
import {TripsPage} from "../pages/trips/trips";
import {LocalWeatherPage} from "../pages/local-weather/local-weather";
import { AuthProvider } from '../providers/auth/auth';
import { UserProvider } from '../providers/user/user';
import { CommonProvider } from '../providers/common/common';
import { PostProvider } from '../providers/post/post';
import { QuestionProvider } from '../providers/question/question';

// import services
// end import services
// end import services

// import pages
// end import pages

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    QuestionPage,
    ProfilePage,
    ContactPage,
    GodsonListPage,
    GodsonDetailsPage,
    LocalWeatherPage,
    NotificationsPage,
    HistoryPage,
    RegisterPage,
    QuestionDetailsPage,
    SearchLocationPage,
    ListQuestionPage,
    TripsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    //Ng5SliderModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    QuestionPage,
    ProfilePage,
    ContactPage,
    GodsonListPage,
    GodsonDetailsPage,
    LocalWeatherPage,
    NotificationsPage,
    HistoryPage,
    RegisterPage,
    QuestionDetailsPage,
    SearchLocationPage,
    ListQuestionPage,
    TripsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    ActivityService,
    TripService,
    WeatherProvider,
    AuthProvider,
    UserProvider,
    AppStorageService,
    CommonProvider,
    PostProvider,
    QuestionProvider,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class AppModule {
}
