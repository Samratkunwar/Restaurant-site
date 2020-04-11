import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  Cname : string = "Sizzler cafe";
  Cemail: string = "siz@s.com";
  Ctype: string  = "Restaurant";

  items = [
    {name:"item 1", price:20 , quantity: 100 },
    {name:"item 2", price:20 , quantity: 100 },
    {name:"item 3", price:20 , quantity: 100 }
  ]; 
  constructor() { }

  ngOnInit() {
  }

}
