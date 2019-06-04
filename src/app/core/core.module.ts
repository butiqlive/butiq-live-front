import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule as AppSharedModule } from '../shared/shared.module';

import { ServicesModule } from './services/services.module';
import { UtilsModule } from './utils/utils.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppSharedModule,
    ServicesModule,
    UtilsModule
  ],
  exports: [
    AppSharedModule
  ]
})
export class CoreModule { }
