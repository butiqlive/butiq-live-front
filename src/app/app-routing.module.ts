import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeGuard } from './core/guards/home.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'src/app/landing/landing.module#LandingModule',
    /* canActivate: [
      HomeGuard
    ] */
  },
  {
    path: 'auth',
    loadChildren: 'src/app/auth/auth.module#AuthModule',
    /* canActivate: [
      HomeGuard
    ] */
  },
  {
    path: 'home',
    loadChildren: 'src/app/home/home.module#HomeModule',
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'account',
    loadChildren: 'src/app/account/account.module#AccountModule',
    canActivate: [
      AuthGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
