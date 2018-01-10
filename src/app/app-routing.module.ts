import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'admin',
    loadChildren: 'app/home/home.module#HomeModule'

    // canLoad: [AuthGuardService]
  },
  {
    path: 'hero',
    loadChildren: 'app/hero/hero.module#HeroModule'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadChildren: 'app/home/home.module#HomeModule'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
