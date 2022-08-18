import { ChannelComponent } from './components/channel/channel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: ChannelComponent,
  },
  { path: 'play', loadChildren: () => import('./pages/play/play.module').then(m => m.PlayModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
