import { Component, OnChanges, Input, Output, EventEmitter, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

import { Song } from '@app/music/shared/services/songs.service';

@Component({
  selector: 'app-song-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.scss']
})
export class SongFormComponent implements OnChanges {

  toggled = false;
  exists = false;

  @Input()
  song: Song;

  @Output()
  create = new EventEmitter<Song>();

  @Output()
  update = new EventEmitter<Song>();

  @Output()
  remove = new EventEmitter<Song>();

  form = this.fb.group({
    name: ['', Validators.required],
    artist: this.fb.array(['']),
    playlist: false,
    favorite: false
  });

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.song && this.song.name) {
      this.exists = true;
      this.emptyArtist();

      const value = this.song;
      this.form.patchValue(value);

      if (value.artist) {
        for (const item of value.artist) {
          this.artist.push(new FormControl(item));
        }
      }

    }
  }

  emptyArtist() {
    while (this.artist.controls.length) {
      this.artist.removeAt(0);
    }
  }

  get required() {
    return (
      this.form.get('name').hasError('required') &&
      this.form.get('name').touched
    );
  }

  get artist() {
    return this.form.get('artist') as FormArray;
  }

  addArtist() {
    this.artist.push(new FormControl(''));
  }

  removeArtist(index: number) {
    this.artist.removeAt(index);
  }

  createSong() {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    }
  }

  updateSong() {
    if (this.form.valid) {
      this.update.emit(this.form.value);
    }
  }

  removeSong() {
    this.remove.emit(this.form.value);
  }

  toggle() {
    this.toggled = !this.toggled;
  }
}
