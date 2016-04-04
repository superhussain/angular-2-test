import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';
@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/tpl/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    videos:Array<Video>;

    constructor() {
        this.videos = [
            new Video(1, "Design & Code a Mobile First Landing Page! (1/4)", "2750Vj-hMq8", "Part 1/4"),
            new Video(2, "Design & Code a Mobile First Landing Page! (2/4)", "ZRb1BQnV9G4", "Part 2/4"),
            new Video(3, "Design & Code a Mobile First Landing Page! (3/4)", "nUhuop2IOd4", "Part 3/4"),
            new Video(4, "Design & Code a Mobile First Landing Page! (4/4)", "As2ns5FTfXw", "Part 4/4")
        ]
    }
}
