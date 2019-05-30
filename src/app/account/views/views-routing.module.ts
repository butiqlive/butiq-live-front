import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsComponent } from './views.component';
import { MembershipViewComponent } from './membership-view/membership-view.component';
import { ContactViewComponent } from './contact-view/contact-view.component';

const routes: Routes = [
  {
    path: '',
    component: ViewsComponent,
    children: [
      {
        path: 'membership',
        component: MembershipViewComponent
      },
      {
        path: 'contact',
        component: ContactViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
