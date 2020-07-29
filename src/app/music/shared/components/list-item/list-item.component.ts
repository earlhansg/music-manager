import { Component, ChangeDetectionStrategy, 
  Input, Output, EventEmitter } from '@angular/core';

import { faHeadphones, faStar } from '@fortawesome/free-solid-svg-icons';
import { Song } from '../../services/songs.service';

@Component({
  selector: 'app-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {

  faHeadphones = faHeadphones;
  faStar = faStar;
    
  toggled = false;

  @Input()
  item: Song;

  @Output()
  remove = new EventEmitter<any>();

  @Output()
  update = new EventEmitter<any>();

  constructor() {}

  toggle() {
    this.toggled = !this.toggled;
  }

  removeItem() {
    this.remove.emit(this.item);
  }

  updateItem(song: Song, type: 'playlist' | 'favorite') {
    if(type === 'playlist') {
      this.update.emit(Object.assign(song, { playlist: !song.playlist }));
    } else {
      this.update.emit(Object.assign(song, { favorite: !song.favorite }));
    }
  }
  
  getRoute(item: any) {
    return [`../songs`, item.key];
  }

}
