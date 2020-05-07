import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsPage } from '../products/products.page'
import { ModalController, ActionSheetController, AlertController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //variables 
  organization_type: string;
  status: boolean;
  image = ''
  products= [
    { organization:"Restaurant 1", item_name: "item 1", item_price: 20, item_quantity: 20},
    { organization:"Restaurant 2", item_name: "item 2", item_price: 30, item_quantity: 30},
    { organization:"Restaurant 3", item_name: "item 3", item_price: 40, item_quantity: 20},
    { organization:"Restaurant 4", item_name: "item 4", item_price: 50, item_quantity: 20},
  ]

  constructor(
    public modalController: ModalController , 
    private router: Router, 
    public actionSheetController: ActionSheetController,
    public alertController : AlertController 
    ) {}

  ngOnInit() {

    this.organization_type = "Supplier";
    // this.organization_type = "Restaurant";

    if (this.organization_type == "Supplier") {
      this.status = true;
    }else {
      this.status = false;
    }

    this.image = '../../assets/pics/hotel1.jpg'
    
  }

      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     //                                                                                                             //
    //                                  Edit modal controller                                                      //
   //                                                                                                             //
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     //                                                                                                             //
    //                                  Delete Option                                                              //
   //                                                                                                             //
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // function to delete respective item
  deleteProd(i) {
    this.products.splice(i, 1);
  };
  
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     //                                                                                                             //
    //                                  Order option                                                               //
   //                                                                                                             //
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
      if (order.data == "no changes") {
        
      }else {
        let no = order.data;
        if (no['item_amount'] == 0) {
          
        } else {

          console.log(no);
          this.displayAddToCart();
        }
      }
    })
    return await modal.present();
  };
  

      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     //                                                                                                             //
    //                                  ActionSheetController                                                      //
   //                                                                                                             //
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // function to present edit/delete/order menu
  async showMenu(i) {

    if (this.organization_type == "Supplier") {

      // if Supplier is logged in
      const actionSheet = await this.actionSheetController.create({
        // header: '',
        buttons: [
          {
            text: 'Delete',
            role: 'destructive',
            icon: 'trash',
            handler: () => {
              this.displayAlertMessage(i);
              console.log('Delete clicked');
            }
          }, 
          {
            text: 'Edit',
            icon: 'create-outline',
            handler: () => {
              this.editProd(i)
              console.log('Edit clicked');
            }
          }, 
          {
            text: 'Cancel',
            icon: 'close',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      await actionSheet.present();

    } else {

      // if Restaurant/Wholeseller is logged in
      const actionSheet = await this.actionSheetController.create({
        // header: '',
        buttons: [
          {
            text: 'Order',
            role: 'order',
            icon: 'pricetags-outline',
            handler: () => {
              this.orderProd(i);
              console.log('order clicked');
            }
          }, 
          {
            text: 'Cancel',
            icon: 'close',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      await actionSheet.present();
    }
  }


      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     //                                                                                                             //
    //                                  Alert Message                                                             //
   //                                                                                                             //
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // function to display alert message when deleting any item
  async displayAlertMessage(i) {
    const alert = await this.alertController.create({
      header : 'Delete the item!',
      message : 'Do you agree to delete the selected item permanently from the database?',
      buttons : [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Okay',
          handler: () => {
            this.deleteProd(i);
            console.log('Confirm delete');
          }
        }
      ]
    });
    await alert.present();
  }

  // function to display alert message on adding item to cart
  async displayAddToCart() {
    const alert = await this.alertController.create({
      // header : 'Add To Cart!',
      message : 'Item Added to Cart',
      buttons : [
        {
          text: 'Okay',
          handler: () => {
            console.log('Added to Cart');
          }
        }
      ]
    });
    await alert.present();
  }
}
