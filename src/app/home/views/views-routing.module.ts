import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsComponent } from './views.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { VideoViewComponent } from './video-view/video-view.component';
import { CollectionViewComponent } from './collection-view/collection-view.component';

const routes: Routes = [
  {
    path: '',
    component: ViewsComponent,
    children: [
      {
        path: '',
        component: HomeViewComponent
      },
      {
        path: 'video',
        component: VideoViewComponent
      },
      {
        path: 'collection',
        component: CollectionViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }