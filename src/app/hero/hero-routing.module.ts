import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroComponent } from './hero.component';

const heroRoutes: Routes = [
  {
    path: '',
    component: HeroComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(heroRoutes)],
  exports: [RouterModule]
})
export class HeroRoutingModule {}
