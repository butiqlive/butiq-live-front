import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { ViewsRoutingModule } from './views-routing.module';
import { HomeViewComponent } from './home-view/home-view.component';
import { CoreModule as HomeCoreModule } from '../core/core.module';
import { SharedModule as HomeSharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ViewsComponent, 
    HomeViewComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    HomeCoreModule,
    HomeSharedModule
  ]
})
export class ViewsModule { }
