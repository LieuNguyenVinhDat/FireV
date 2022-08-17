import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddVideoComponent } from 'src/app/components/add-video/add-video.component';
import { ChannelComponent } from 'src/app/components/channel/channel.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { SideBarComponent } from 'src/app/components/side-bar/side-bar.component';
import { SubscribeComponent } from 'src/app/components/subscribe/subscribe.component';

@NgModule({
  declarations: [
    ChannelComponent,
    HomeComponent,
    SubscribeComponent,
    NavbarComponent,
    AddVideoComponent,
    SideBarComponent,
  ],
  imports: [CommonModule],
  exports: [
    ChannelComponent,
    HomeComponent,
    SubscribeComponent,
    NavbarComponent,
    AddVideoComponent,
    SideBarComponent,],
})
export class ShareModule {}
