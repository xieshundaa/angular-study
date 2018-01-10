import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroRoutingModule } from './hero-routing.module';
import { HeroComponent } from './hero.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HeroRoutingModule
  ],
  declarations: [
    HeroComponent
  ],
  providers: [],
  bootstrap: []
})

export class HeroModule {}
