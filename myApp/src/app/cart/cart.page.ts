import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(private router: Router) { }

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
    this.cart = [];
    alert('Order Confirmed');
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

}
