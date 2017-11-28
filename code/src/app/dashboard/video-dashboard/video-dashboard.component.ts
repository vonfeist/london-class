import {Component, OnInit} from '@angular/core';

@Component({
	selector   : 'app-video-dashboard',
	templateUrl: './video-dashboard.component.html'
})
export class VideoDashboardComponent implements OnInit {
	selectedVideo;

	constructor() {
	}

	ngOnInit() {
	}

	onSelectVideo(video) {
		this.selectedVideo = video;
	}

}
