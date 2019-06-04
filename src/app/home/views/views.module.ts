import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { ViewsRoutingModule } from './views-routing.module';
import { HomeViewComponent } from './home-view/home-view.component';
import { CoreModule as HomeCoreModule } from '../core/core.module';
import { SharedModule as HomeSharedModule } from '../shared/shared.module';
import { VideoViewComponent } from './video-view/video-view.component';

@NgModule({
  declarations: [
    ViewsComponent, 
    HomeViewComponent, VideoViewComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    HomeCoreModule,
    HomeSharedModule
  ]
})
export class ViewsModule { }
