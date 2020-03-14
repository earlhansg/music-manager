import { Component, OnInit, Input } from '@angular/core';

import { Song } from '@app/music/shared/services/songs.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
    
  toggled = false;

  @Input()
  item: any;

  constructor() {}

  ngOnInit() {}
}
