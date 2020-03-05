import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SongsRoutingModule } from './songs-routing.module';
import { SharedModule } from '@app/music/shared/shared.module';

import { SongsComponent } from './container/songs/songs.component';
import { SongComponent } from './container/song/song.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    SongsRoutingModule
  ],
  declarations: [
    SongsComponent,
    SongComponent
  ]
})
export class SongsModule {}
