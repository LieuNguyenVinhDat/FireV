import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelPageComponent } from './channel-page.component';

const routes: Routes = [
  { path: '', component: ChannelPageComponent },
  { path: 'add', loadChildren: () => import('../channel-page/add-page/add-page.module').then(m => m.AddPageModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelPageRoutingModule { }
