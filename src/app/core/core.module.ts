import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule as AppSharedModule } from '../shared/shared.module';

import { ServicesModule } from './services/services.module';
import { UtilsModule } from './utils/utils.module';
import { GuardsModule } from './guards/guards.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppSharedModule,
    ServicesModule,
    UtilsModule,
    GuardsModule
  ],
  exports: [
    AppSharedModule
  ]
})
export class CoreModule { }
