import { ChannelComponent } from './components/channel/channel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: ChannelComponent,
  },
  { path: 'channel_page', loadChildren: () => import('./pages/channel-page/channel-page.module').then(m => m.ChannelPageModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
