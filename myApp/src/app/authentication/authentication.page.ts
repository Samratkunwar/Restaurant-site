import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements OnInit {


  user: [];
  constructor(private router:Router) { }

  ngOnInit() {
  }

  login() {
    // this.router.navigate(['/tabs']);
    alert('login');
  }

  signup() {
    alert('signup');
  }

}
