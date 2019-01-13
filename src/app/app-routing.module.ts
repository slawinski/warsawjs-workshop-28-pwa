import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageHomeComponent } from './component/page-home/page-home.component';
import { PageMovieProfileComponent } from './component/page-movie-profile/page-movie-profile.component';

const routes: Routes = [
  {
    path: '',
    component: PageHomeComponent
  },
  {
    path: 'movies/:id',
    component: PageMovieProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
