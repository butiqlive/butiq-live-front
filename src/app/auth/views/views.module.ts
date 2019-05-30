import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { ViewsRoutingModule } from './views-routing.module';
import { LoginViewComponent } from './login-view/login-view.component';
import { SignupViewComponent } from './signup-view/signup-view.component';
import { ResetPasswordViewComponent } from './reset-password-view/reset-password-view.component';
import { CoreModule as AuthCoreModule } from '../core/core.module';
import { SharedModule as AuthSharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ViewsComponent, 
    LoginViewComponent, 
    SignupViewComponent, 
    ResetPasswordViewComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    AuthCoreModule,
    AuthSharedModule
  ]
})
export class ViewsModule { }
