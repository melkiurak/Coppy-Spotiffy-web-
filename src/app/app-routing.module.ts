import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Pages/register/register.component';
import { SerchComponent } from './Pages/serch/serch.component';
import { ErrorComponent } from './Pages/error/error.component';
import { register } from 'module';
import { LoginComponent } from './Pages/login/login.component';
import { TrackComponent } from './Components/track/track.component';
import { AlbumComponent } from './Components/album/album.component';
import { ArtistComponent } from './Components/artist/artist.component';
import { PlaylistComponent } from './Components/playlist/playlist.component';
import { AudiobookComponent } from './Components/audiobook/audiobook.component';
import { EpisodeComponent } from './Components/episode/episode.component';
import { ShowComponent } from './Components/show/show.component';
const routes: Routes = [
  { path: 'track/:id', component: TrackComponent },
  { path: 'album/:id', component: AlbumComponent },
  { path: 'artist/:id', component: ArtistComponent },
  { path: 'playlist/:id', component: PlaylistComponent },
  { path: 'audiobook/:id', component: AudiobookComponent },
  { path: 'episode/:id', component: EpisodeComponent },
  { path: 'show/:id', component: ShowComponent },
  { path: 'register', title:'Register', component: RegisterComponent},
  { path: 'login', title: 'Login', component: LoginComponent},
  { path: 'searcht', title:'Search', component: SerchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
