import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FavoritesComponent } from './container/favorites/favorites.component';



export const ROUTES: Routes = [
  { path: '', component: FavoritesComponent },
];


@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [ RouterModule ]
})
export class FavoritesRoutingModule {}
