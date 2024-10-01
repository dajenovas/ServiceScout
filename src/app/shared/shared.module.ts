import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { SharedRoutingModule } from './shared-routing.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CardComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
