import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const ROUTES: Routes = [
  {
    path: 'songs',
    loadChildren: './songs/songs.module#SongsModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ]
})
export class MusicRoutingModule {}
