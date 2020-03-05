import { NgModule } from '@angular/core';

import { MusicRoutingModule } from './music-routing.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  imports: [
    MusicRoutingModule,
    SharedModule
  ]
})
export class MusicModule {}
