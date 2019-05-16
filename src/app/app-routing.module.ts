import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'src/app/landing/landing.module#LandingModule'
  },
  {
    path: 'auth',
    loadChildren: 'src/app/auth/auth.module#AuthModule'
  },
  {
    path: 'home',
    loadChildren: 'src/app/home/home.module#HomeModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
