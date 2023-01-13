import { Routes } from '@angular/router';
import { HomePageComponent } from 'src/app/pages/home-page/home-page.component';
import { OurApisPageComponent } from 'src/app/pages/our-apis-page/our-apis-page.component';
import { SignUpPageComponent } from 'src/app/pages/sign-up-page/sign-up-page.component';
import { SupportPageComponent } from 'src/app/pages/support-page/support-page.component';
import { LoginPageComponent } from './../../pages/login-page/login-page.component';

export const HomeLayoutRoutes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    component: HomePageComponent,
  },
  {
    path: 'apis',
    component: OurApisPageComponent,
  },
  {
    path: 'registrarse',
    component: SignUpPageComponent,
  },
  {
    path: 'soporte',
    component: SupportPageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
];
