import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AciStoreComponent } from './acistore/acistore.component';
import { CartDetailComponent } from './acistore/cart-detail.component';
import { CheckoutComponent } from './acistore/checkout.component';
import { AciStoreFirstGuard } from './acistore/acistoreFirst.guard';

const routes: Routes = [
  {path:"acistore",component: AciStoreComponent, canActivate: [AciStoreFirstGuard]},
  {path:"cart",component: CartDetailComponent, canActivate: [AciStoreFirstGuard]},
  {path:"checkout",component: CheckoutComponent, canActivate: [AciStoreFirstGuard]},
  {path:"**", redirectTo: "/acistore"}
];
//if user fails to do something, it is better to get a fallback mechanism 
@NgModule({
  providers: [AciStoreFirstGuard],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
