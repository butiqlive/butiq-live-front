import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { PresentationVideosComponent } from './components/presentation-videos/presentation-videos.component';
import { SimpleHeroComponent } from './components/simple-hero/simple-hero.component';
import { TestimoniesComponent } from './components/testimonies/testimonies.component';
import { SharedModule as AppSharedModule } from '../../shared/shared.module';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';

@NgModule({
  declarations: [
    HeroComponent,
    SimpleHeroComponent,
    HowItWorksComponent,
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
    HowItWorksComponent,
    SimpleHeroComponent,
    TestimoniesComponent
  ]
})
export class CoreModule { }
