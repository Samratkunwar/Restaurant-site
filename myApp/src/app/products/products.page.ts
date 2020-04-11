import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  constructor(private modalController: ModalController) { }

  name: string

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
