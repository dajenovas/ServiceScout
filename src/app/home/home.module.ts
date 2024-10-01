import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from "../shared/shared.module";
import { GetStartedComponent } from './get-started/get-started.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { HomeRoutingModule } from './home-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    HomeMainComponent,
    GetStartedComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FontAwesomeModule,
    FormsModule
]
})
export class HomeModule { }
