import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkRoutingModule } from './work-routing.module';
import { WorkComponent } from './work.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    WorkRoutingModule
  ],
  declarations: [
    WorkComponent
  ],
  providers: [],
  bootstrap: []
})

export class WorkModule {}
