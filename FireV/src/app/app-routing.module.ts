import { ChannelComponent } from './components/channel/channel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVideoComponent } from './components/add-video/add-video.component';

const routes: Routes = [
  {
    path: '',
    component: ChannelComponent,
  },
  {
    path: 'add',
    component: AddVideoComponent,
  },
  {
    path: 'channel_page',
    loadChildren: () =>
      import('./pages/channel-page/channel-page.module').then(
        (m) => m.ChannelPageModule
      ),
  },
  { path: 'add-page', loadChildren: () => import('./pages/channel-page/add-page/add-page.module').then(m => m.AddPageModule) },
  { path: 'play', loadChildren: () => import('./pages/play/play.module').then(m => m.PlayModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
