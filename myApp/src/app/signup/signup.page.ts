import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  firstname : string;
  lastname  : string;
  email     : string;
  username  : string;
  password  : string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  register() {
    let firstname = this.firstname;
    let lastname = this.lastname;
    let email = this.email;
    let username = this.username;
    let password = this.password;

    alert('Welcome ' + username);
    this.router.navigateByUrl('home');
  }

  login() {
    this.router.navigateByUrl('login');
  }

}
