import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlaylistComponent } from './container/playlist/playlist.component';



export const ROUTES: Routes = [
  { path: '', component: PlaylistComponent },
];


@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [ RouterModule ]
})
export class PlaylistRoutingModule {}
