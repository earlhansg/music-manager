import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { SharedModule } from '@app/music/shared/shared.module';

// Components
import { PlaylistComponent } from './container/playlist/playlist.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    SharedModule.forRoot(),
    FontAwesomeModule
  ],
  declarations: [
    PlaylistComponent
  ]
})
export class PlaylistModule {}
