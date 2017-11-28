import {Component, OnInit} from '@angular/core';

import {videos} from '../shared/videos';

@Component({
	selector   : 'app-video-list',
	templateUrl: './video-list.component.html'
})
export class VideoListComponent implements OnInit {
	videoList = videos;
	currentVideo;
	isCurrent:boolean;
	selectedVideo;

	constructor() {
	}

	ngOnInit() {
		//this.videoIsSelected = true;
	}
	setVideo(vid){
		this.currentVideo = vid;
	}

	onSelectVideo(video){
		this.selectedVideo=video;
	}


}
