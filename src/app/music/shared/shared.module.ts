import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SongsService } from './services/songs.service';

import { ListItemComponent } from './components/list-item/list-item.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ListItemComponent],
  exports: [ListItemComponent]
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
