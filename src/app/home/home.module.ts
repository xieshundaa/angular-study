import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

import { HomeRoutingModule } from './home-routing.module';
import { PictureComponent } from './picture/picture.component';
import { TextComponent } from './text/text.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    PictureComponent,
    TextComponent
  ],
  providers: [],
  bootstrap: []
})

export class HomeModule { }
