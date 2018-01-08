import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestMustacheComponent } from './test-mustache/test-mustache.component';
import { TestIfComponent } from './test-if/test-if.component';
import { TestNgForComponent } from './test-ng-for/test-ng-for.component';
import { TestSwitchComponent } from './test-switch/test-switch.component';
import { TestNgClassComponent } from './test-ng-class/test-ng-class.component';
import { TestNgStyleComponent } from './test-ng-style/test-ng-style.component';
import { TestNgModelComponent } from './test-ng-model/test-ng-model.component';
import { TestPipeComponent } from './test-pipe/test-pipe.component';


@NgModule({
  declarations: [
    AppComponent,
    TestMustacheComponent,
    TestIfComponent,
    TestNgForComponent,
    TestSwitchComponent,
    TestNgClassComponent,
    TestNgStyleComponent,
    TestNgModelComponent,
    TestPipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
