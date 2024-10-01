import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMainComponent } from './about/about-main/about-main.component';
import { GetStartedComponent } from './home/get-started/get-started.component';
import { HomeMainComponent } from './home/home-main/home-main.component';
import { LoginComponent } from './home/login/login.component';
import { ProfileMainComponent } from './profile/profile-main/profile-main.component';
import { ServiceMainComponent } from './service/service-main/service-main.component';

const routes: Routes = [
  {
    path:"",
    component:GetStartedComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"home",
    component:HomeMainComponent
  },
  {
    path:"service",
    component:ServiceMainComponent
  },
  {
    path:"profile",
    component:ProfileMainComponent
  },
  {
    path:"about",
    component:AboutMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
