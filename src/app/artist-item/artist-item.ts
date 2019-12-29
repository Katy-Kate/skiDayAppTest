import { Component } from '@angular/core';
import { IMAHES_PATH } from '../../variables';
import {Artist} from '../app.component';

@Component({
  selector: 'artist-item',
  templateUrl: 'artist-item.html',
  inputs: ['artist']
})

export class ArtistItemComponent {
  artist: Artist;
  imagePath = IMAHES_PATH;
}

