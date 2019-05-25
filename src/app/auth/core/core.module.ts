import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { ResetPasswordFormComponent } from './components/reset-password-form/reset-password-form.component';
import { SharedModule as AppSharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginFormComponent, 
    SignupFormComponent, 
    ResetPasswordFormComponent
  ],
  imports: [
    CommonModule,
    AppSharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    LoginFormComponent,
    SignupFormComponent,
    ResetPasswordFormComponent
  ]
})
export class CoreModule { }
