import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule as AppSharedModule } from '../../shared/shared.module';
import { VideosCarouselComponent } from './components/videos-carousel/videos-carousel.component';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { HomeHeroComponent } from './components/home-hero/home-hero.component';

@NgModule({
  declarations: [
    VideosCarouselComponent,
    VideoCardComponent,
    HomeHeroComponent
  ],
  imports: [
    CommonModule,
    AppSharedModule
  ],
  exports: [
    VideosCarouselComponent,
    VideoCardComponent,
    HomeHeroComponent
  ]
})
export class CoreModule { }
