import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { SharedModule } from "../shared/shared.module";
import { ServiceMainComponent } from './service-main/service-main.component';
import { ServiceRoutingModule } from './service-routing.module';


@NgModule({
  declarations: [
    ServiceMainComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    SharedModule,
    FormsModule
]
})
export class ServiceModule { }
