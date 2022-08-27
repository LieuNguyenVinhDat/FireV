import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home-pages/home-pages.module').then(m => m.HomePagesModule)
      },
      {
        path: 'add',
        loadChildren: () => import('./add-page/add-page.module').then(m => m.AddPageModule)
      },
      {
        path: 'view',
        loadChildren: () => import('./view-profile-page/view-profile-page.module').then(m => m.ViewProfilePageModule)
      },
      {
        path: 'channel',
        loadChildren: () => import('./channel-page/channel-page.module').then(m => m.ChannelPageModule)
      },
      {
        path: 'play',
        loadChildren: () => import('./play/play.module').then(m => m.PlayModule)
      },
      {
        path: 'popular',
        loadChildren: () => import('./popular/popular.module').then(m => m.PopularModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
