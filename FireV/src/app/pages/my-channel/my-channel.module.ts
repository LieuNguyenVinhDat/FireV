import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyChannelRoutingModule } from './my-channel-routing.module';
import { MyChannelComponent } from './my-channel.component';
import { ShareModule } from 'src/app/modules/share/share.module';

@NgModule({
  declarations: [
    MyChannelComponent
  ],
  imports: [
    CommonModule,
    MyChannelRoutingModule,
    ShareModule
  ]
})
export class MyChannelModule { }
