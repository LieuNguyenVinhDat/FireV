import { ChannelComponent } from './components/channel/channel.component';
import { HomeComponent } from './components/home/home.component';
import { AddVideoComponent } from './components/add-video/add-video.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '', component: ChannelComponent,
  // },
  { path: 'home', loadChildren: () => import('./pages/channel-page/channel-page.module').then(m => m.ChannelPageModule) },
  { path: 'home-pages', loadChildren: () => import('./pages/home-pages/home-pages.module').then(m => m.HomePagesModule) },
  {
      path: 'channel', component: ChannelComponent,
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
