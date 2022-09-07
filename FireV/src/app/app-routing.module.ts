import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro-page/intro-page.module').then(m => m.IntroPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/layout/layout.module').then(m => m.LayoutModule)
  },
  { path: 'Search', loadChildren: () => import('./pages/layout/search/search.module').then(m => m.SearchModule) },
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
