import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { SelectivePreloadingStrategy } from './common/selective-preloading-strategy';

const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'hero',
    loadChildren: './hero/hero.module#HeroModule',
    data: { preload: true }
  },
  {
    path: 'work',
    loadChildren: './work/work.module#WorkModule'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadChildren: './home/home.module#HomeModule'
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
