import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavHeaderComponentComponent } from './components/nav-header-component/nav-header-component.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    NavHeaderComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, provideFirebaseApp(() => initializeApp(environment.firebase)), provideAnalytics(() => getAnalytics())],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
