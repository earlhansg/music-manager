import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Module
import { FavoritesRoutingModule } from './favorites-routing.modules';
import { SharedModule } from '@app/music/shared/shared.module';
// Components
import { FavoritesComponent } from './container/favorites/favorites.component';
// Icons
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    SharedModule.forRoot(),
    FontAwesomeModule
  ],
  declarations: [
    FavoritesComponent
  ]
})
export class FavoritesModule {}
