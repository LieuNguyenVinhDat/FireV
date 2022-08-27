import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPageRoutingModule } from './add-page-routing.module';
import { AddPageComponent } from './add-page.component';
import { ShareModule } from 'src/app/modules/share/share.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddPageComponent
  ],
  imports: [
    CommonModule,
    AddPageRoutingModule,
    ShareModule,
  ]
})
export class AddPageModule { }
