import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewProfilePageRoutingModule } from './view-profile-page-routing.module';
import { ViewProfilePageComponent } from './view-profile-page.component';


@NgModule({
  declarations: [
    ViewProfilePageComponent
  ],
  imports: [
    CommonModule,
    ViewProfilePageRoutingModule
  ]
})
export class ViewProfilePageModule { }
