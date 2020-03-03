import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AciStoreComponent } from './acistore.component';
import { ModelModule } from '../model/model.module';
import { CartSummaryComponent } from './cart-summary.component';
import { CartDetailComponent } from './cart-detail.component';
import { CheckoutComponent } from './checkout.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AciStoreComponent,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,ModelModule,RouterModule,FormsModule
  ],
  exports:[AciStoreComponent]
})
export class AcistoreModule { }
