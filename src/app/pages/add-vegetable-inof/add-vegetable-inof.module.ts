import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddVegetableInofPage } from './add-vegetable-inof.page';

const routes: Routes = [
  {
    path: '',
    component: AddVegetableInofPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddVegetableInofPage]
})
export class AddVegetableInofPageModule {}
