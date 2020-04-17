import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PhotoService } from '../services/photo.service';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {

  constructor(
    private modalController: ModalController,
    public photoService: PhotoService 
    ) { }

  Cname : string ;
  Cemail: string ;
  Ctype: string  ;
  image: string  ;

  ngOnInit() {
  }

  changeddata() {
    let data = [];
    data['Cname'] = this.Cname;
    data['Cemail'] = this.Cemail;
    data['Ctype'] = this.Ctype;
    data['image'] = this.image;
    this.modalController.dismiss(data);
  }

  dismiss() {
    this.modalController.dismiss("no");
  }

  

}
