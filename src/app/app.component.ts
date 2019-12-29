import { Component } from '@angular/core';
import artistDAta from './mock_data/artistdata';

export class Artist {
  name: string;
  shortname?: string;
  reknown?: string;
  bio?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'skiDayAppTest';
  name: string;
  artists: Artist[];
  currentArtist: Artist;

  constructor() {
    this.name = 'Hassum Harold';
    this.artists = artistDAta;
  }

  addArtist(artist) {
    this.artists.push(
      {
        name: artist,
        reknown: 'Penn State',
      }
    );
  }

  onClick(artist, artistContainer: HTMLLIElement) {
    this.name = artist.name;
    artistContainer.style.backgroundColor = '#FECE4E';
  }
}
