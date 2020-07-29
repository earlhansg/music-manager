import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { Observable, of } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';

import { Store } from '@app/store';
import { AuthService } from '@app/auth/shared/services/auth.service';



export interface Song {
  name: string;
  artist: string[];
  playlist: boolean;
  favorite: boolean;
  timestamp: number;
  key: string;
  $exists: () => boolean;
}


@Injectable()
export class SongsService {

  songs$: Observable<any> = this.db
    .list(`songs/${this.uid}`)
    .snapshotChanges()
    .pipe(
      map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))),
      tap(next => this.store.set('songs', next))
    );

  constructor(private store: Store,
              private db: AngularFireDatabase,
              private authService: AuthService) {}

  get uid() {
    return this.authService.user.uid;
  }

  getSong(key: string) {
    // tslint:disable-next-line:curly
    if (!key) return of({});

    return this.store.select<Song[]>('songs')
      .pipe(
        filter(Boolean),
        map((songs: any ) => songs.find((song: Song) => song.key === key))
    );
  }

  addSong(song: Song) {
    return this.db.list(`songs/${this.uid}`).push(song);
  }

  updateSong(key: string, song: Song) {
    return this.db.object(`songs/${this.uid}/${key}`).update(song);
  }

  removeSong(key: string) {
    return this.db.list(`songs/${this.uid}`).remove(key);
  }

}
