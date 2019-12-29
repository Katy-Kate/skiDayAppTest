import {Component} from '@angular/core';
import {IMAHES_PATH} from '../../variables';
import {Artist} from '../app.component';

@Component({
  selector: 'artist-deteils',
  templateUrl: 'artist-deteils.html',
  inputs: ['artist']
})

export class ArtistDeteilsComponent {
  artist: Artist;
  imagePath = IMAHES_PATH;
}
