import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule as AppSharedModule } from '../../shared/shared.module';
import { ContactComponent } from './components/contact/contact.component';
import { MembershipComponent } from './components/membership/membership.component';

@NgModule({
  declarations: [
    ContactComponent,
    MembershipComponent
  ],
  imports: [
    CommonModule,
    AppSharedModule
  ],
  exports: [
    ContactComponent,
    MembershipComponent
  ]
})
export class CoreModule { }
