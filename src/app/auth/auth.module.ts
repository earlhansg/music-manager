import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// third-party modules
import { AngularFireModule, FirebaseAppConfig } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { SharedModule } from './shared/shared.module';

import { AuthRoutingModule } from './auth-routing.module';

export const firebaseConfig: FirebaseAppConfig = {
    apiKey: 'AIzaSyCeehbNKx3VQJCK7qP3Hox5Qnu8-EN4Xps',
    authDomain: 'music-manager-app.firebaseapp.com',
    databaseURL: 'https://music-manager-app.firebaseio.com',
    projectId: 'music-manager-app',
    storageBucket: 'music-manager-app.appspot.com',
    messagingSenderId: '1014100351409',
    appId: '1:1014100351409:web:846d06749673e896384590',
    measurementId: 'G-1BKTMBPH83'
};

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        SharedModule.forRoot()
    ]
})
export class AuthModule {}
