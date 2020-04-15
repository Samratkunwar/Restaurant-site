import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.page.html',
  styleUrls: ['./nav-menu.page.scss'],
})
export class NavMenuPage implements OnInit {

  constructor(private router: Router) { }

  
  ngOnInit() {
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
