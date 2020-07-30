import { Component, OnInit, OnDestroy } from '@angular/core';
// Service & Store 
import { Store } from '@app/store';
import { Song, SongsService } from '@app/music/shared/services/songs.service';
// Icon 
import { faStar } from '@fortawesome/free-solid-svg-icons';
// rxjs operators
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit, OnDestroy {

  playlist$: Observable<Song[]>;
  subscription: Subscription;
  faStar = faStar;

  constructor(private store: Store,
              private songsService: SongsService) {}

  ngOnInit() {
    this.playlist$ = this.store.select<Song[]>('songs')
      .pipe(
        map((songs) => {
          if(songs) {
            return songs.filter((song: Song) => song.playlist);
          } else {
            return null;
          }
      }))
    this.subscription = this.songsService.songs$.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
