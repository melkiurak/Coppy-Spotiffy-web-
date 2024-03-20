import { Component } from '@angular/core';
import { Observable, debounce, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { FormControl } from '@angular/forms';
import { FeaturedPlaylistsResponse, SpotifyService, newRelease, searchResult } from '../../service/spotify.service';
import { faMagnifyingGlass, faSliders } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-info',
  templateUrl: './home-info.component.html',
  styleUrl: './home-info.component.scss',
})
export class HomeInfoComponent {
  seacrhFieled: FormControl = new FormControl();
  searchResult: searchResult | null = null;
  isSearchResultsVisible: boolean = false;
  //Иконки
  fasearch = faMagnifyingGlass;
  fasliders = faSliders;
  //Сохраняем данные получение через API
  public spotifyPlaylist$?: Observable<FeaturedPlaylistsResponse>;
  public Releases$?: Observable<newRelease>;
  public SearchResults$?: Observable<searchResult>;

  constructor(private spotifyService: SpotifyService) { 
  }
  //Метод для получене данных
  public ngOnInit(): void {
    this.spotifyPlaylist$ = this.spotifyService.getFeaturePlaylist();
    this.Releases$ = this.spotifyService.getRelise();
    this.seacrhFieled.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((query: string) => this.spotifyService.getSearch(query))
    ).subscribe((results: searchResult) => {
      this.searchResult = results;
      this.isSearchResultsVisible = true;
      console.log(this.searchResult)
    })
  }
}
