import { Component } from '@angular/core';
import artistDAta from './mock_data/artistdata';
import { ArtistItemComponent } from './artist-item/artist-item';

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
  title = 'skiDayAshowArtistppTest';
  query: string;
  artists: Artist[];
  currentArtist: Artist;

  constructor() {
    this.query = '';
    this.artists = artistDAta;
  }

  showArtist(item) {
    this.currentArtist = item;
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
    this.query = artist.name;
    artistContainer.style.backgroundColor = '#FECE4E';
  }
}
