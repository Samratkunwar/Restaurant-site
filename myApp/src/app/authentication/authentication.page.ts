import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements OnInit {

  username: string;
  password: string;
  user: [{username:"user1", password:"123"}];
  constructor(private router:Router) { }

  ngOnInit() {
  }

  login() {
    if (this.username = this.user[0].username) {
      alert('login');
    }else{
      alert('Invalid username')
    };  
  };

  signup() {
    alert('signup');
  }

}
