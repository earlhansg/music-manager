import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, Subscription } from 'rxjs';

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
    // this.subscription = this.songsService.songs$.subscribe();
  }


  async addSong(event: Song) {
    this.backToSongs();
  }

  async updateSong(event: Song) {
  }

  async removeSong(event: Song) {

  }

  backToSongs() {
    this.router.navigate(['songs']);
  }

}
