import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PictureComponent } from './picture/picture.component';
import { TextComponent } from './text/text.component';

const homeRoutes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'pictures',
        pathMatch: 'full'
      },
      {
        path: 'pictures',
        component: PictureComponent
      },
      {
        path: 'text',
        component: TextComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
