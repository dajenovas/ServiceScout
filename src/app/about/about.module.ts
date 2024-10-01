import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from "../shared/shared.module";
import { AboutMainComponent } from './about-main/about-main.component';
import { AboutRoutingModule } from './about-routing.module';


@NgModule({
  declarations: [
    AboutMainComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
]
})
export class AboutModule { }
