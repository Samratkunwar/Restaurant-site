import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ProfilePage } from './profile.page';
import { EditProfilePage } from '../edit-profile/edit-profile.page';
import { SharedModule } from 'src/app/shared.module';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProfilePage
      }
    ])
  ],
  declarations: [ProfilePage, EditProfilePage],
  entryComponents: [ EditProfilePage]
})
export class ProfilePageModule {}
