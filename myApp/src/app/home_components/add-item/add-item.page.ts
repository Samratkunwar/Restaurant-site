import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { Router } from '@angular/router';
import { StorageService, Item } from '../../services/storage.service';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {

  constructor(
    public photoService: PhotoService ,
    private router: Router,
    private storageService: StorageService,
    public storage: Storage,
    private modalController: ModalController
  ) { }

  newItem: Item = <Item>{};

  ngOnInit() {
  }

  async addItem() {

    this.newItem.id = Date.now();
   
    this.storageService.addItem(this.newItem).then( item => {
      this.newItem = <Item>{};
    })
    console.log(this.newItem);
    this.router.navigateByUrl('home'), {state: {updateInfos: true}};
    // this.modalController.dismiss();
  }

  async dismiss() {
    this.router.navigateByUrl('home'), {state: {updateInfos: true}};
  }

  

}
