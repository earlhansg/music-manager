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
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit, OnDestroy {

  favorites$: Observable<Song[]>;
  subscription: Subscription;
  faStar = faStar;

  constructor(private store: Store,
              private songsService: SongsService) {}
  
  ngOnInit() {
    this.favorites$ = this.store.select<Song[]>('songs')
      .pipe(
        map((songs) => {
          if(songs) {
            return songs.filter((song: Song) => song.favorite);
          } else {
            return null;
          }
      }))
    this.subscription = this.songsService.songs$.subscribe();
  }

  async removeSong(event: Song) {
    // Remove song from favorite
    await this.songsService.updateSong(event.key, 
      Object.assign(event, { favorite: !event.favorite }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
