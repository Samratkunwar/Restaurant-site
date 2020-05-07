import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ActionSheetController, AlertController } from '@ionic/angular';
import { ProductsPage } from '../home_components/products/products.page';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.page.html',
  styleUrls: ['./nav-menu.page.scss'],
})
export class NavMenuPage implements OnInit {

  constructor(
    public modalController: ModalController , 
    private router: Router, 
    public actionSheetController: ActionSheetController,
    public alertController : AlertController 
    ) { }

  
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
 
    // function to add new items to the list by the app owner
    async addItem() {
      const modal = await this.modalController.create({
        component: ProductsPage,
        componentProps: {}
      });
      modal.onDidDismiss().then((new_data) => {
        alert('item added')
      })
      return await modal.present();
    };

}
