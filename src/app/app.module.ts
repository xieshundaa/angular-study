import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { ChildComponent } from './parent-child/child/child.component';
import { BrotherComponent } from './brother/brother.component';
import { Child1Component } from './brother/child1/child1.component';
import { Child2Component } from './brother/child2/child2.component';
import { BtnStatusService } from './brother/service/btn-status.service';
import { LocalStorgeComponent } from './local-storge/local-storge.component';
import { Child1LocalComponent } from './local-storge/child1/child1.component';
import { Child2LocalComponent } from './local-storge/child2/child2.component';
import { FormQuickComponent } from './form-quick/form-quick.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentChildComponent,
    ChildComponent,
    BrotherComponent,
    Child1Component,
    Child2Component,
    Child1LocalComponent,
    Child2LocalComponent,
    LocalStorgeComponent,
    FormQuickComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BtnStatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
