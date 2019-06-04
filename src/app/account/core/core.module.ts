import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule as AppSharedModule } from '../../shared/shared.module';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    AppSharedModule
  ],
  exports: [
    ContactComponent
  ]
})
export class CoreModule { }
