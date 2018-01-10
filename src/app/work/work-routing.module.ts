import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from './work.component';

const heroRoutes: Routes = [
  {
    path: '',
    component: WorkComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(heroRoutes)],
  exports: [RouterModule]
})
export class WorkRoutingModule {}
