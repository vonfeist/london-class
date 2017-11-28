import {Component, Input} from '@angular/core';

@Component({
	selector: 'app-video-component',
	template: `
        <li [class.selected]="isCurrent" 
			class="list-group-item">
            {{ video.title}} - {{ video.author}}
        </li>
	`
})
export class VideoDetailComponent {
	@Input() video: any;
	@Input() isCurrent: boolean;
}