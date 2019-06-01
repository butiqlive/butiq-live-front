import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { PresentationVideosComponent } from './components/presentation-videos/presentation-videos.component';
import { SimpleHeroComponent } from './components/simple-hero/simple-hero.component';
import { TestimoniesComponent } from './components/testimonies/testimonies.component';
import { SharedModule as AppSharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    HeroComponent,
    SimpleHeroComponent,
    PresentationVideosComponent,
    TestimoniesComponent
  ],
  imports: [
    CommonModule,
    AppSharedModule
  ],
  exports:[
    HeroComponent,
    PresentationVideosComponent,
    SimpleHeroComponent,
    TestimoniesComponent
  ]
})
export class CoreModule { }
