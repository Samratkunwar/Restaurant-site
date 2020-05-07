import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { 
    path: 'home', 
    loadChildren: () => import('./home_components/home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./authentication_components/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./authentication_components/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./authentication_components/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./checkout_components/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./home_components/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'nav-menu',
    loadChildren: () => import('./nav-menu/nav-menu.module').then( m => m.NavMenuPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./checkout_components/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'order-details',
    loadChildren: () => import('./checkout_components/order-details/order-details.module').then( m => m.OrderDetailsPageModule)
  },
  {
    path: 'add-item',
    loadChildren: () => import('./add-item/add-item.module').then( m => m.AddItemPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
