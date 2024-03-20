import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './Home.component';
import { RegisterComponent } from './Pages/register/register.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { SerchComponent } from './Pages/serch/serch.component';
import { ErrorComponent } from './Pages/error/error.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './Pages/login/login.component';
import { SpotifyService } from './service/spotify.service';
import { ArtistComponent } from './Components/artist/artist.component';
import { TrackComponent } from './Components/track/track.component';
import { AlbumComponent } from './Components/album/album.component';
import { PlaylistComponent } from './Components/playlist/playlist.component';
import { AudiobookComponent } from './Components/audiobook/audiobook.component';
import { EpisodeComponent } from './Components/episode/episode.component';
import { ShowComponent } from './Components/show/show.component';
import { HomeInfoComponent } from './Components/home-info/home-info.component';
import { MypipePipe } from './pipe/mypipe.pipe';
import { AudioPlayerComponent } from './Components/audio-player/audio-player.component';

@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
    SidebarComponent,
    SerchComponent,
    ErrorComponent,
    LoginComponent,
    ArtistComponent,
    TrackComponent,
    AlbumComponent,
    PlaylistComponent,
    AudiobookComponent,
    EpisodeComponent,
    ShowComponent,
    HomeInfoComponent,
    MypipePipe,
    AudioPlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    MatProgressBarModule,
  ],
  providers: [
    SpotifyService,
    provideClientHydration(),
    provideAnimationsAsync(),

  ],
  bootstrap: [HomeComponent]
})
export class AppModule { }