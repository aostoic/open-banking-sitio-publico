import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavHeaderComponentComponent } from './components/nav-header-component/nav-header-component.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire/compat';
import packageInfo from '../../package.json';

import {
  AngularFireAnalyticsModule,
  ScreenTrackingService,
  UserTrackingService,
  CONFIG,
  DEBUG_MODE,
  APP_NAME,
  APP_VERSION,
} from '@angular/fire/compat/analytics';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    NavHeaderComponentComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService,
    { provide: DEBUG_MODE, useValue: environment.debugFirebase },
    { provide: APP_NAME, useValue: environment.firebase.projectId },
    { provide: APP_VERSION, useValue: packageInfo.version },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
