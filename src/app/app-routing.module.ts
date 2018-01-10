import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'hero',
    component: HeroComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // 通配符匹配必须写在最后一个
  {
    path: '**',
    component: HomeComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
