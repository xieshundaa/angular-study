import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroRoutingModule } from './hero-routing.module';
import { HeroComponent } from './hero.component';

@NgModule({
  imports: [
    CommonModule,
    HeroRoutingModule
  ],
  declarations: [
    HeroComponent
  ],
  providers: [],
  bootstrap: []
})

export class HeroModule {}
