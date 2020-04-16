import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  Cname : string 
  Cemail: string 
  Ctype: string  
  image: string
  character = [
    {Cname:"Sizzler cafe", Cemail:"siz@s.com", Ctype:"Restaurant", image :"../../assets/pics/pic1.jpg" }
  ];
 
  constructor(private router: Router) { }

  ngOnInit() {
    this.showChart();
  }

  showChart() {
    var ctx = (<any>document.getElementById('myChart')).getContext('2d');
    var chart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Day-1', 'Day-2', 'Day-3', 'Day-4', 'Day-5'],
          datasets: [{
            label: 'Items sold',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
    });     
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

  order_status() {
    alert('Comeback later');
  }

  edit_profile() {

  }
}
