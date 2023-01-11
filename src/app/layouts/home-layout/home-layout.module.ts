import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannersComponentComponent } from 'src/app/components/banners-component/banners-component.component';
import { FooterComponentComponent } from 'src/app/components/footer-component/footer-component.component';
import { HowToStartComponentComponent } from 'src/app/components/how-to-start-component/how-to-start-component.component';
import { NeedHelpComponentComponent } from 'src/app/components/need-help-component/need-help-component.component';
import { OpportunitiesComponentComponent } from 'src/app/components/opportunities-component/opportunities-component.component';
import { OurApisComponentComponent } from 'src/app/components/our-apis-component/our-apis-component.component';
import { WouldYouLikeToStartComponentComponent } from 'src/app/components/would-you-like-to-start-component/would-you-like-to-start-component.component';
import { HomePageComponent } from 'src/app/pages/home-page/home-page.component';

import { OurApisPageComponent } from 'src/app/pages/our-apis-page/our-apis-page.component';
import { SignUpPageComponent } from 'src/app/pages/sign-up-page/sign-up-page.component';
import { SupportPageComponent } from 'src/app/pages/support-page/support-page.component';

import { HomeLayoutRoutes } from './home-layout.routing';
@NgModule({
  imports: [RouterModule.forChild(HomeLayoutRoutes)],

  declarations: [
    HomePageComponent,
    OurApisComponentComponent,
    WouldYouLikeToStartComponentComponent,
    OpportunitiesComponentComponent,
    NeedHelpComponentComponent,
    HowToStartComponentComponent,
    FooterComponentComponent,
    BannersComponentComponent,
    OurApisPageComponent,
    SignUpPageComponent,
    SupportPageComponent,
  ],
  bootstrap: [HomePageComponent],
  exports: [],
})
export class HomeLayoutModule {}
