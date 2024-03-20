import { Component } from '@angular/core';
import { FeaturedPlaylistsResponse, Playlist, SpotifyService } from '../../service/spotify.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { faHeart, faBookmark } from '@fortawesome/free-solid-svg-icons'; 
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.scss'
})
export class PlaylistComponent  {
  //Иконки
  heart = faHeart;
  bookmark = faBookmark;
  //Создание переменных
  public playlistId?: string;
  
  constructor(private playlistService: SpotifyService, private route:ActivatedRoute) { }
  
  //Сохраняем данные получение через API
  public spotifyPlaylist$?: Observable<Playlist>;
  
  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.playlistId = params['id'];
      console.log(this.playlistId);
      if (this.playlistId) {
        this.spotifyPlaylist$ = this.playlistService.getPlaylist(this.playlistId);
    }
    });
  }

}
