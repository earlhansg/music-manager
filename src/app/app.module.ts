import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthModule } from './auth/auth.module';
import { MusicModule } from './music/music.module';

import { AppComponent } from './root/container/app.component';
import { HeaderComponent } from './root/components/header/header.component';
import { NavbarComponent } from './root/components/navbar/navbar.component';

import { Store } from './store';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    MusicModule
  ],
  providers: [
    Store
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
