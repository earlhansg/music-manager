import { NgModule } from '@angular/core';

import { MusicRoutingModule } from './music-routing.module';
import { PlaylistModule } from './playlist/playlist.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  imports: [
    MusicRoutingModule,
    PlaylistModule,
    SharedModule
  ]
})
export class MusicModule {}
