import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './navbar-links/about-us/about-us.component';
import { HomeComponent } from './navbar-links/home/home.component';
import { ContactUsComponent } from './navbar-links/contact-us/contact-us.component';
import { GetCustomCodeComponent } from './navbar-links/get-custom-code/get-custom-code.component';
import { SignUpComponent } from './navbar-links/sign-up/sign-up.component';
import { LoginComponent } from './navbar-links/login/login.component';
import { ProfileComponent } from './navbar-links/profile/profile.component';
import { ChangePasswordComponent } from './navbar-links/change-password/change-password.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full',
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
      },
      {
        path: 'get-custom-code',
        component: GetCustomCodeComponent,
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavbarRoutingModule {}
