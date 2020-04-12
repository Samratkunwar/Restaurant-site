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

  //variables 
  organization_type: string;
  status: boolean;
  products= [
    { name: "item 1", price: 20, quantity: 20},
    { name: "item 2", price: 30, quantity: 30},
    { name: "item 3", price: 40, quantity: 20},
    { name: "item 4", price: 50, quantity: 20},
  ]

  constructor(public modalController: ModalController ,private router: Router) {}

  ngOnInit() {

    this.organization_type = "Supplier";
    // this.organization_type = "Restaurant";

    if (this.organization_type == "Supplier") {
      this.status = true;
    }else {
      this.status = false;
    }
    
  }

  // Functions for Organization_type: 'Suppliers'
  async editProd(i) {
    const modal = await this.modalController.create({
      component: ProductsPage,
      componentProps: {
        'organization_type' : this.organization_type, 
        'name' : this.products[i].name,
        'price': this.products[i].price,
        'quantity': this.products[i].quantity
      }
    });
    modal.onDidDismiss().then((edited_data) => {
      let nc = edited_data.data;
      if ((nc['name'] == undefined) && (nc['price'] == undefined) && (nc['quantity'] == undefined)) {

      } else {
        this.products[i].name = nc['name'];
        this.products[i].price = nc['price'];
        this.products[i].quantity = nc['quantity'];
      }
    })
    return await modal.present();
  };

  async deleteProd() {

  }
  

  // Functions for Organization_type: 'Restaurant'
  async orderProd(i) {
    const modal = await this.modalController.create({
      component: ProductsPage,
      componentProps: {
        'organization_type' : this.organization_type,
        'name' : this.products[i].name,
        'price': this.products[i].price,
        'quantity': this.products[i].quantity
      }
    });
    return await modal.present();
  };
  

  // Logout as a user
  logout() {
    this.router.navigateByUrl('login');
  }

}
