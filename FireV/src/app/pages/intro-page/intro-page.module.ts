import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroPageRoutingModule } from './intro-page-routing.module';
import { IntroPageComponent } from './intro-page.component';
import { ShareModule } from 'src/app/modules/share/share.module';


@NgModule({
  declarations: [
    IntroPageComponent
  ],
  imports: [
    CommonModule,
    IntroPageRoutingModule,
    ShareModule
  ]
})
export class IntroPageModule { }
