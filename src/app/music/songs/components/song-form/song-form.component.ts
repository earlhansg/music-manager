import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

import { Song } from '@app/music/shared/services/songs.service';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.scss']
})
export class SongFormComponent implements OnInit {

  @Output()
  create = new EventEmitter<Song>();

  form = this.fb.group({
    name: ['', Validators.required],
    artist: this.fb.array([''])
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

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
}
