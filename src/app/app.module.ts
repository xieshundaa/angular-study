import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { ChildOneComponent } from './ng-content/child-one/child-one.component';
import { ChildTwoComponent } from './ng-content/child-two/child-two.component';


@NgModule({
  declarations: [
    AppComponent,
    NgContentComponent,
    ChildOneComponent,
    ChildTwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
