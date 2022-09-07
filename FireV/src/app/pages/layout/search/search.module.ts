import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    InfiniteScrollModule,
    AppRoutingModule
  ]
})
export class SearchModule { }
