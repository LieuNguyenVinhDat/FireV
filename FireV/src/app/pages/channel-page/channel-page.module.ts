import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelPageRoutingModule } from './channel-page-routing.module';
import { ChannelPageComponent } from './channel-page.component'
import { ShareModule } from 'src/app/modules/share/share.module';

@NgModule({
  declarations: [
    ChannelPageComponent,

  ],
  imports: [
    CommonModule,
    ChannelPageRoutingModule,
    ShareModule
  ]
})
export class ChannelPageModule { }
