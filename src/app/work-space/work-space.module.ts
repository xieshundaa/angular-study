import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { WorkSpaceRoutingModule } from './work-space.routing.module';
import { WorkSpaceComponent } from './work-space.component';
import { AuthService } from '../guard/auth.service';
import { AuthGuardService } from '../guard/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    WorkSpaceRoutingModule
  ],
  declarations: [
    WorkSpaceComponent
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: []
})

export class WorkSpaceModule {}
