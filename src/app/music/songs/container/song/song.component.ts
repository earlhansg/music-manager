import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Song, SongsService } from '@app/music/shared/services/songs.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {

  song$: Observable<Song>;
  subscription: Subscription;

  constructor(
    private songsService: SongsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.songsService.songs$.subscribe();
    this.song$ = this.route.params
      .pipe(switchMap(param => this.songsService.getSong(param.id)));
  }


  async addSong(event: Song) {
    await this.songsService.addSong(event);
    this.backToSongs();
  }

  async updateSong(event: Song) {
    const key = this.route.snapshot.params.id;
    await this.songsService.updateSong(key, event);
    this.backToSongs();
  }

  async removeSong(event: Song) {
    const key = this.route.snapshot.params.id;
    await this.songsService.removeSong(key);
    this.backToSongs();
  }

  backToSongs() {
    this.router.navigate(['songs']);
  }

}
