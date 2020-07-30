import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@app/auth/shared/guards/auth.guard';


export const ROUTES: Routes = [
  {
    path: 'songs',
    canActivate: [AuthGuard],
    loadChildren: './songs/songs.module#SongsModule'
  },
  {
    path: 'playlist',
    canActivate: [AuthGuard],
    loadChildren: './playlist/playlist.module#PlaylistModule'
  },
  {
    path: 'favorites',
    canActivate: [AuthGuard],
    loadChildren: './favorites/favorites.module#FavoritesModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ]
})
export class MusicRoutingModule {}
