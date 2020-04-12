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
    { organization:"Restaurant 1", item_name: "item 1", item_price: 20, item_quantity: 20},
    { organization:"Restaurant 2", item_name: "item 2", item_price: 30, item_quantity: 30},
    { organization:"Restaurant 3", item_name: "item 3", item_price: 40, item_quantity: 20},
    { organization:"Restaurant 4", item_name: "item 4", item_price: 50, item_quantity: 20},
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
        'organization' : this.products[i].organization,
        'item_name' : this.products[i].item_name,
        'item_price': this.products[i].item_price,
        'item_quantity': this.products[i].item_quantity
      }
    });
    modal.onDidDismiss().then((edited_data) => {
      let nc = edited_data.data;
      if ((nc['item_name'] == undefined) && (nc['item_price'] == undefined) && (nc['item_quantity'] == undefined)) {

      } else {
        this.products[i].organization = nc['organization'];
        this.products[i].item_name = nc['item_name'];
        this.products[i].item_price = nc['item_price'];
        this.products[i].item_quantity = nc['item_quantity'];
      }
    })
    return await modal.present();
  };

  deleteProd(i) {
    if (confirm("Delete " + this.products[i].item_name)) {
      this.products.splice(i, 1);
    }
  };
  

  // Functions for Organization_type: 'Restaurant'
  async orderProd(i) {
    const modal = await this.modalController.create({
      component: ProductsPage,
      componentProps: {
        'organization_type' : this.organization_type,
        'organization': this.products[i].organization,
        'item_name' : this.products[i].item_name,
        'item_price': this.products[i].item_price,
        'item_quantity': this.products[i].item_quantity
      }
    });
    modal.onDidDismiss().then((order) => {
      let no = order.data;
      if (no['item_amount'] == 0) {

      } else {
        console.log(no);
        alert("added to cart");
      }
    })
    return await modal.present();
  };
  

  // Logout as a user
  logout() {
    this.router.navigateByUrl('login');
  }

}
