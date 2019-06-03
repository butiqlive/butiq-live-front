import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './services/shared/api.service';
import { JwtService } from './services/shared/jwt.service';
import { LocalStorageService } from './services/shared/local-storage.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    JwtService,
    LocalStorageService,
    AuthService,
    UserService
  ]
})
export class CoreModule { }
