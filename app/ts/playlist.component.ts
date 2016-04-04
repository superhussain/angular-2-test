import {Component} from 'angular2/core';
import {Video} from './video';

@Component({
  selector: 'playlist',
  templateUrl: 'app/ts/tpl/playlist.component.html',
  inputs: ['videos']
})

export class PlaylistComponent{
  onSelect(vid:Video) {
    console.log(JSON.stringify(vid));
    var videoFrame = '<iframe src="https://www.youtube.com/embed/' + vid.videoCode + '" frameborder="0" allowfullscreen></iframe>'
    document.getElementById('video-wrapper').innerHTML = videoFrame;
  }
}
