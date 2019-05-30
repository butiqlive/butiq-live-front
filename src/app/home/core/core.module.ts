import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule as AppSharedModule } from '../../shared/shared.module';
import { VideosCarouselComponent } from './components/videos-carousel/videos-carousel.component';

@NgModule({
  declarations: [
    VideosCarouselComponent
  ],
  imports: [
    CommonModule,
    AppSharedModule
  ],
  exports: [
    VideosCarouselComponent
  ]
})
export class CoreModule { }
