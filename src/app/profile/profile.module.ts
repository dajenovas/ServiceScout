import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from "../shared/shared.module";
import { ProfileMainComponent } from './profile-main/profile-main.component';
import { ProfileRoutingModule } from './profile-routing.module';


@NgModule({
  declarations: [
    ProfileMainComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
]
})
export class ProfileModule { }
