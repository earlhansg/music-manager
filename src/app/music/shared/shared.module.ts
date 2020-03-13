import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SongsService } from './services/songs.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [],
  exports: []
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        SongsService,
      ]
    };
  }

}
