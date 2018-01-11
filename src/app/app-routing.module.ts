import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { SelectivePreloadingStrategy } from './common/selective-preloading-strategy';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: './home/home.module#HomeModule'
  // },
  // {
  //   path: 'hero',
  //   loadChildren: './hero/hero.module#HeroModule',
  //   data: { preload: true }
  // },
  // {
  //   path: 'work',
  //   loadChildren: './work/work.module#WorkModule'
  // },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'workspace',
    data: {preload: true},
    loadChildren: './work-space/work-space.module#WorkSpaceModule'
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: LoginComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false,
        preloadingStrategy: SelectivePreloadingStrategy
      } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule],
  providers: [SelectivePreloadingStrategy]
})
export class AppRoutingModule {}
