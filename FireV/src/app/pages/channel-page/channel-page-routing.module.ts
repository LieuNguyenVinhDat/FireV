import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelComponent } from 'src/app/components/channel/channel.component';

const routes: Routes = [
  { path: '', component: ChannelComponent },
  { path: 'add', loadChildren: () => import('../channel-page/add-page/add-page.module').then(m => m.AddPageModule)},
  { path: 'view_profile', loadChildren: () => import('../channel-page/view-profile-page/view-profile-page.module').then(m => m.ViewProfilePageModule)},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelPageRoutingModule { }
