import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {ArtistItemComponent} from './artist-item/artist-item';
import {ArtistDeteilsComponent} from './artist-deteils/artist-deteils';
import {SearchPipe} from './pipes/pipe.search';


@NgModule({
  declarations: [
    AppComponent,
    ArtistItemComponent,
    ArtistDeteilsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
