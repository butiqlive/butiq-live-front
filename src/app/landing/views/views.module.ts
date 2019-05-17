import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { ViewsRoutingModule } from './views-routing.module';
import { SharedModule as AppSharedModule } from '../../shared/shared.module';
import { LandingViewComponent } from './landing-view/landing-view.component';

@NgModule({
  declarations: [ViewsComponent, LandingViewComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    AppSharedModule
  ]
})
export class ViewsModule { }
