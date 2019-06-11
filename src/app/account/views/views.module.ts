import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { ViewsRoutingModule } from './views-routing.module';
import { MembershipViewComponent } from './membership-view/membership-view.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { CoreModule as AccountCoreModule } from '../core/core.module';
import { SharedModule as AccountSharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ViewsComponent,
    MembershipViewComponent,
    ContactViewComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    AccountCoreModule,
    AccountSharedModule
  ]
})
export class ViewsModule { }
