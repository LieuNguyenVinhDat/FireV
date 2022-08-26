import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopularRoutingModule } from './popular-routing.module';
import { PopularComponent } from './popular.component';
import { ShareModule } from 'src/app/modules/share/share.module';

@NgModule({
  declarations: [
    PopularComponent
  ],
  imports: [
    CommonModule,
    PopularRoutingModule,
    ShareModule
  ]
})
export class PopularModule { }
