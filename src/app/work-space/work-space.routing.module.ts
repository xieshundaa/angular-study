import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkSpaceComponent } from './work-space.component';


const workSpaceRoutes = [
  {
    path: '',
    component: WorkSpaceComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: '../home/home.module#HomeModule'
      },
      {
        path: 'hero',
        loadChildren: '../hero/hero.module#HeroModule'
      },
      {
        path: 'work',
        loadChildren: '../work/work.module#WorkModule'
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(workSpaceRoutes)],
  exports: [RouterModule]
})
export class WorkSpaceRoutingModule {}
