import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyChannelComponent } from './my-channel.component';

const routes: Routes = [{ path: '', component: MyChannelComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyChannelRoutingModule { }
