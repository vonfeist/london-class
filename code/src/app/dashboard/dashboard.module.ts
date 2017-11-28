import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VideoDashboardComponent} from './video-dashboard/video-dashboard.component';
import {VideoListComponent} from './video-list/video-list.component';
import {VideoPlayerComponent} from './video-player/video-player.component';
import {StatFiltersComponent} from './stat-filters/stat-filters.component';
import {RouterModule, Routes} from '@angular/router';
import {VideoDetailComponent} from './video-detail/video.detail.component';

const routes: Routes = [
	{path: '',  component: VideoDashboardComponent}
]

@NgModule({
	imports     : [
		CommonModule,
		RouterModule.forChild(routes)
	],
	declarations: [
		VideoDashboardComponent,
		VideoListComponent,
		VideoPlayerComponent,
		StatFiltersComponent,
		VideoDetailComponent
	]
})
export class DashboardModule {
}
