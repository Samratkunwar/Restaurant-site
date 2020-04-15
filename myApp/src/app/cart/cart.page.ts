import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(
    private router: Router,
    public alertController: AlertController
    ) { }

  cart = [
    { organization:"Restaurant 1", item_name: "item 1", item_price: 20, item_quantity: 20, total_amount: 400},
    { organization:"Restaurant 1", item_name: "item 2", item_price: 20, item_quantity: 25, total_amount: 500}
  ]
  
  total_amount: number = 0;

  ngOnInit() {
    for (let i = 0; i < this.cart.length; i++) {
      this.total_amount = this.total_amount + this.cart[i].total_amount;
      
    } 
  }

  confirmOrder() {
    this.displayAlertMessage();
  }

  // Logout as a user
  logout() {
    this.router.navigateByUrl('login');
  }

  //navigate to profile
  goToProfile() {
    this.router.navigateByUrl('profile');
  }
  //navigate back to home
  goToHome() {
    this.router.navigateByUrl('home');
  }
  // navigate to cart
  goToCart() {
    this.router.navigateByUrl('cart');
  }


  
  // function to display alert message when deleting any item
  async displayAlertMessage() {
    const alert = await this.alertController.create({
      header : 'Confirm Order!',
      message : 'Do you wish to checkout?',
      buttons : [
        {
          text: 'Confirm',
          role: 'okey',
          cssClass: 'secondary',
          handler: () => {
            this.cart = [];
            this.total_amount = 0;
            console.log('Confirm Order');
          }
        },
        {
          text: 'Not Now',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Checkout halted');
          }
        }
      ]
    });
    await alert.present();
  }

}
