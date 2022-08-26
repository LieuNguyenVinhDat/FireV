import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePagesRoutingModule } from './home-pages-routing.module';
import { HomePagesComponent } from './home-pages.component';
import { ShareModule } from 'src/app/modules/share/share.module';

@NgModule({
  declarations: [
    HomePagesComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    HomePagesRoutingModule
  ]
})
export class HomePagesModule { }
