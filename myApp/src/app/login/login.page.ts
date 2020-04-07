import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  password: string;

  fakeUser= [
    {username:"admin", password:"admin"}
  ];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  login() {
    if (this.username == this.fakeUser[0].username && this.password == this.fakeUser[0].password) {
      this.router.navigateByUrl('home');
    } else {
      console.log("Invalid username or password!");
    }
    
  }

  signup(){
    alert('signup!');
  }

}
