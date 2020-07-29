import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { Store } from '@app/store';
import { Song, SongsService } from '@app/music/shared/services/songs.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit, OnDestroy {

  songs$: Observable<Song[]>;
  subscription: Subscription;

  constructor(private store: Store,
              private songsService: SongsService) {}

  ngOnInit() {
    this.songs$ = this.store.select<Song[]>('songs');
    this.subscription = this.songsService.songs$.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  removeSong(event: Song) {
    // Remove song
    this.songsService.removeSong(event.key);
  }

  async updateSong(event: Song) {
    // Update song 
    await this.songsService.updateSong(event.key, event);
  }

}
