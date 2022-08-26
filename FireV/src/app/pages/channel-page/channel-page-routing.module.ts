import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelComponent } from 'src/app/components/channel/channel.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ChannelPageComponent } from './channel-page.component';

const routes: Routes = [
  { path: '', component: ChannelPageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'add', loadChildren: () => import('../channel-page/add-page/add-page.module').then(m => m.AddPageModule)},
  { path: 'view_profile', loadChildren: () => import('../channel-page/view-profile-page/view-profile-page.module').then(m => m.ViewProfilePageModule)},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelPageRoutingModule { }
