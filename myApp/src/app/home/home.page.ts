import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsPage } from '../products/products.page'
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  products= [
    { name: "item 1"},
    { name: "item 2"},
    { name: "item 3"},
    { name: "item 4"},
  ]

  constructor(public modalController: ModalController ,private router: Router) {}

  async checkProd(i) {
    const modal = await this.modalController.create({
      component: ProductsPage,
      componentProps: {
        'name' : this.products[i].name
      }
    });
    return await modal.present();
  };
  
  logout() {
    this.router.navigateByUrl('login');
  }

}
