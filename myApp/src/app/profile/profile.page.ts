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
 
  constructor() { }

  ngOnInit() {
  }

}
