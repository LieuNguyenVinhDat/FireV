import { ChannelComponent } from './components/channel/channel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/channel-page/channel-page.module').then(m => m.ChannelPageModule) },
  { path: 'home-pages', loadChildren: () => import('./pages/home-pages/home-pages.module').then(m => m.HomePagesModule) },
  {
    path: 'channel_page',
    loadChildren: () =>
      import('./pages/channel-page/channel-page.module').then(
        (m) => m.ChannelPageModule
      ),
  },
  { path: 'add-page', loadChildren: () => import('./pages/channel-page/add-page/add-page.module').then(m => m.AddPageModule) },
  { path: 'play', loadChildren: () => import('./pages/play/play.module').then(m => m.PlayModule) },
  { path: 'popular', loadChildren: () => import('./pages/popular/popular.module').then(m => m.PopularModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
