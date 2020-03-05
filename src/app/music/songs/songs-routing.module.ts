import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SongsComponent } from './container/songs/songs.component';
import { SongComponent } from './container/song/song.component';


export const ROUTES: Routes = [
  { path: '', component: SongsComponent },
  { path: 'new', component: SongComponent },
  { path: ':id', component: SongComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [ RouterModule ]
})
export class SongsRoutingModule {}
