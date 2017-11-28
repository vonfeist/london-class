import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {videos} from '../shared/videos';

@Component({
	selector   : 'app-video-list',
	templateUrl: './video-list.component.html'
})
export class VideoListComponent implements OnInit {

	@Output() selectVideo:EventEmitter<any> = new EventEmitter<any>()
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
		this.selectVideo.emit(video)
	}


}
