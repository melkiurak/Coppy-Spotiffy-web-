import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { url } from 'node:inspector';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

export interface topPlaylists{
  collaborative: boolean;
  description: string;
  external_urls: { [key: string]: string };
  href: string;
  id: string;
  images: { 
    height: number | null; 
    url: string; 
    width: number | null 
  }[];
  name: string;
  owner: {
    display_name: string;
    external_urls: { [key: string]: string };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  primary_color: string | null;
  public: boolean;
  snapshot_id: string;
  tracks: { href: string; total: number };
  type: string;
  uri: string;
}
export interface FeaturedPlaylistsResponse {
  message: string;
  playlists: {
    href: string,
    items: topPlaylists[],
    limit: number,
    next: string | null,
    offset: number,
    previous: string | null,
    total: number,
  };
}
export interface newRelease{
  albums:{
    href: string,
    limit: number,
    next: string,
    offset: number,
    previous: string,
    total: number,
    items: infoRelease[]
  }
}
export interface infoRelease{
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: {
    url: string;
    height: number;
    width: number;
  }[];
  name: string;
  release_date: string;
  release_date_precision: string;
  type: string;
  uri: string;
  artists: {
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }[];
}
export interface searchResult {
  albums: { items: infoRelease[] };
  artists: { items: any[] };
  playlists: { items: topPlaylists[] };
  tracks: { items: any[] };
  shows: { items: any[] };
  episodes: { items: any[] };
  audiobooks: { items: any[] };
}
export interface Playlist {
  collaborative: boolean;
  description: string;
  external_urls: { spotify: string };
  followers: { href: string; total: number };
  href: string;
  id: string;
  images: { url: string; height: number; width: number }[];
  name: string;
  owner: {
    external_urls: { spotify: string };
    followers: { href: string; total: number };
    href: string;
    id: string;
    type: string;
    uri: string;
    display_name: string;
  };
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: {
      added_at: string;
      added_by: {
        external_urls: { spotify: string };
        followers: { href: string; total: number };
        href: string;
        id: string;
        type: string;
        uri: string;
      };
      is_local: boolean;
      track: {
        album: {
          album_type: string;
          total_tracks: number;
          available_markets: string[];
          external_urls: { spotify: string };
          href: string;
          id: string;
          images: { url: string; height: number; width: number }[];
          name: string;
          release_date: string;
          release_date_precision: string;
          restrictions: { reason: string };
          type: string;
          uri: string;
          artists: {
            external_urls: { spotify: string };
            href: string;
            id: string;
            name: string;
            type: string;
            uri: string;
          }[];
        };
        artists: {
          external_urls: { spotify: string };
          followers: { href: string; total: number };
          genres: string[];
          href: string;
          id: string;
          images: { url: string; height: number; width: number }[];
          name: string;
          popularity: number;
          type: string;
          uri: string;
        }[];
        available_markets: string[];
        disc_number: number;
        duration_ms: number;
        explicit: boolean;
        external_ids: { isrc: string; ean: string; upc: string };
        external_urls: { spotify: string };
        href: string;
        id: string;
        is_playable: boolean;
        linked_from: {};
        restrictions: { reason: string };
        name: string;
        popularity: number;
        preview_url: string;
        track_number: number;
        type: string;
        uri: string;
        is_local: boolean;
      };
    }[];
  };
  type: string;
  uri: string;
}
export interface Track {
  album: {
    album_type: string;
    total_tracks: number;
    available_markets: string[];
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    images: {
      url: string;
      height: number;
      width: number;
    }[];
    name: string;
    release_date: string;
    release_date_precision: string;
    restrictions: {
      reason: string;
    };
    type: string;
    uri: string;
    artists: {
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      name: string;
      type: string;
      uri: string;
    }[];
  };
  artists: {
    external_urls: {
      spotify: string;
    };
    followers: {
      href: string;
      total: number;
    };
    genres: string[];
    href: string;
    id: string;
    images: {
      url: string;
      height: number;
      width: number;
    }[];
    name: string;
    popularity: number;
    type: string;
    uri: string;
  }[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    isrc: string;
    ean: string;
    upc: string;
  };
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: {};
  restrictions: {
    reason: string;
  };
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}

@Injectable()
export class SpotifyService {
  //Ссылки
  private spotifyToken = 'BQA6s1HCZ3L_KgCRxfDdvTJV5T5emG-wElDL345sUy4PEpSz0BiIMNPWa_BRPyOW9-pZE2iOI7M1CUMCHN583ngZHh5R2_BUodFCpgrTtHMYnfy-jGs';//Токен Spotify
  private newReliseUrl = 'https://api.spotify.com/v1/browse/new-releases?limit=20';// Нові релізи
  private playlistTopUrl = 'https://api.spotify.com/v1/browse/featured-playlists?limit=20';//Популярні плейлисти
  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Authorization': `Bearer ${this.spotifyToken}`
    });
  }
   //Проверяем и выполняем запрос на топ плейлистов
  public getFeaturePlaylist(): Observable<FeaturedPlaylistsResponse>{
    return this.http.get<FeaturedPlaylistsResponse>(this.playlistTopUrl, {headers: this.headers});
  }
   //Проверяем и выполняем запрос на новые треки
  public getRelise(): Observable<newRelease>{
    return this.http.get<newRelease>(this.newReliseUrl, {headers: this.headers});
  }
  //Проверяем и выполняем запрос на доступ к поиску
  public getSearch(query: string): Observable<searchResult>{
    if (!query.trim()) {
      // Если запрос пустой, возвращаем пустой Observable
      return new Observable<searchResult>();
    }
    const searchUrl = `https://api.spotify.com/v1/search?q=${query}&type=track,album,artist,playlist,audiobook,episode,show`;
    return this.http.get<searchResult>(searchUrl, { headers: this.headers });
  }
  public getPlaylist(playlistId: string): Observable<Playlist>{
    const url = `https://api.spotify.com/v1/playlists/${playlistId}`;
    return this.http.get<Playlist>(url, {headers: this.headers});
  }
  public getTrack(trackId: string): Observable<Track>{
    const url = `https://api.spotify.com/v1/tracks/${trackId}`;
    return this.http.get<Track>(url, {headers: this.headers})
  }

}
