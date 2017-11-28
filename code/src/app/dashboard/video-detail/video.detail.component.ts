import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
	selector: 'app-video-component',
	template: `
        <li [class.selected]="isCurrent" 
			(click)="setVideo(video)"
			class="list-group-item">
            {{ video.title}} - {{ video.author}}
        </li>
	`
})
export class VideoDetailComponent {
	@Input() video: any;
	@Input() isCurrent: boolean;

	@Output() selectVideo:EventEmitter<any> = new EventEmitter<any>();

	setVideo(video){
		console.log('about to emit video: ', video);
		this.selectVideo.emit(video);
	}
}