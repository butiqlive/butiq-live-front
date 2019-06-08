import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'ngx-useful-swiper';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SwiperModule,
    PipesModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SwiperModule,
    PipesModule
  ]
})
export class SharedModule { }
