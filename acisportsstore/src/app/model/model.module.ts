
import { NgModule } from '@angular/core';
import { StaticDataSource } from './static.datasource';
import { ProductRepository } from './product.repository';
import { Cart } from './cart.model';
import { OrderRepository } from './order.repository';
import { Order } from './order.model';
import { RestDataSource } from './rest.datasource';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
    providers:[ProductRepository,Cart,Order,OrderRepository,{provide: StaticDataSource,useClass:RestDataSource}],
    imports:[HttpClientModule]
})

export class ModelModule{}