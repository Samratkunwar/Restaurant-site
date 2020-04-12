import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  constructor(private modalController: ModalController) { }

  name: string;
  price: number;
  quantity: number;
  amount: number;
  organization_type: string;
  edit: boolean

  ngOnInit() {
    if (this.organization_type == "Supplier"){
      this.edit = true;
    } else {
      this.edit = false;
    }
  }

  // Restaurants functions

  order() {
    let orders = [];
    let cost = this.price * this.amount;

    orders['name'] = this.name;
    orders['amount'] = this.amount;
    orders['cost'] = cost;

    this.modalController.dismiss(orders);
  }

  // Suppliers functions
  
  prodChange() {

    let edited_data = []
    edited_data["name"] = this.name;    
    edited_data["price"] = this.price;   
    edited_data["quantity"] = this.quantity;

    this.modalController.dismiss(edited_data);
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
