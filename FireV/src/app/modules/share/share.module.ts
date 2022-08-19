import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddVideoComponent } from 'src/app/components/add-video/add-video.component';
import { ChannelComponent } from 'src/app/components/channel/channel.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { SideBarComponent } from 'src/app/components/side-bar/side-bar.component';
import { SubscribeComponent } from 'src/app/components/subscribe/subscribe.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UpdateComponent } from 'src/app/components/update/update.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DiscoverComponent } from 'src/app/components/discover/discover.component';
import { ViewProfileComponent } from 'src/app/components/view-profile/view-profile.component';

@NgModule({
  declarations: [
    ChannelComponent,
    HomeComponent,
    SubscribeComponent,
    NavbarComponent,
    AddVideoComponent,
    SideBarComponent,
    UpdateComponent,
    ViewProfileComponent,
    DiscoverComponent,
  
  ],
  imports: [CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressBarModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatTooltipModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  exports: [
    ChannelComponent,
    HomeComponent,
    SubscribeComponent,
    NavbarComponent,
    AddVideoComponent,
    SideBarComponent,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    UpdateComponent
  ],
})
export class ShareModule { }
