import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';
import { WorkSpaceComponent } from './work-space.component';
import { AuthService } from '../guard/auth.service';
import { AuthGuardService } from '../guard/auth.guard';
import { SelectivePreloadingStrategy } from '../common/selective-preloading-strategy';
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
        data: {preload: true},
        loadChildren: '../home/home.module#HomeModule'
      },
      {
        path: 'hero',
        data: {preload: true},
        canLoad: {AuthGuardService},
        canActivate: [AuthGuardService],
        loadChildren: '../hero/hero.module#HeroModule'
      },
      {
        path: 'work',
        data: {preload: true},
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
