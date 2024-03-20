import { Component } from '@angular/core';
import { faCirclePlay, faVolumeHigh, faRepeat, faCirclePause, faShuffle, faForwardStep, faBackwardStep  } from '@fortawesome/free-solid-svg-icons';
import { SpotifyService, Track } from '../../service/spotify.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrl: './audio-player.component.scss'
})
export class AudioPlayerComponent {
  //Переменніе

  //Иконки
  play = faCirclePlay;
  pause = faCirclePause;
  next = faForwardStep;
  prev = faBackwardStep;
  random = faShuffle;
  repeat = faRepeat;
  music = faVolumeHigh;

  constructor(private spotifyService: SpotifyService){ }

  
}
