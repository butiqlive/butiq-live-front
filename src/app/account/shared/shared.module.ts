import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedModule as AppSharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AppSharedModule
  ],
  exports: [
    SidebarComponent,
    AppSharedModule
  ]
})
export class SharedModule { }
