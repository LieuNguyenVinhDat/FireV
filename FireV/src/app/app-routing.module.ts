import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home-pages/home-pages.module').then(m => m.HomePagesModule) },
  { path: 'play', loadChildren: () => import('./pages/play/play.module').then(m => m.PlayModule) },
  { path: 'channel_page',loadChildren: () => import('./pages/channel-page/channel-page.module').then((m) => m.ChannelPageModule)},
  { path: 'popular', loadChildren: () => import('./pages/popular/popular.module').then(m => m.PopularModule) },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
