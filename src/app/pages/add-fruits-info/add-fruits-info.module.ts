import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddFruitsInfoPage } from './add-fruits-info.page';

const routes: Routes = [
  {
    path: '',
    component: AddFruitsInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddFruitsInfoPage]
})
export class AddFruitsInfoPageModule {}
