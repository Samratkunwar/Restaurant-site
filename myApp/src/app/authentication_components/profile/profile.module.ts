import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { AddItemPage } from '../../add-item/add-item.page';
import { SharedModule } from '../../shared.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ProfilePageRoutingModule,
  ],
  declarations: [ProfilePage, AddItemPage],
  entryComponents: [ AddItemPage]
})
export class ProfilePageModule {}
