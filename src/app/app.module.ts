import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { SQLite } from '@ionic-native/sqlite';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { TemplatePage } from '../pages/template/template';
import { CameraPage } from '../pages/camera/camera';
import { HomePage } from '../pages/home/home';
import { PfieldPage } from '../pages/pfield/pfield';
import { PaymentPage } from '../pages/payment/payment';
import { ScreeningPage } from '../pages/screening/screening';
import { NotePage } from '../pages/note/note';
import { ApiProvider } from '../provider/api';
import { DatabaseProvider } from '../provider/database/database';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    TemplatePage,
    CameraPage,
    HomePage,
    PfieldPage,
    PaymentPage,
    ScreeningPage,
    NotePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TemplatePage,
    CameraPage,
    HomePage,
    PfieldPage,
    PaymentPage,
    ScreeningPage,
    NotePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    SQLite,
    SQLitePorter,
    DatabaseProvider
  ]
})
export class AppModule {}
