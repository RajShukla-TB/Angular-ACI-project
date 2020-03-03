import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { Order } from './order.model';
//import { Cart } from './cart.model';
//import { Cart } from './cart.model';
const PORT=8888;
const PROTOCOL="http"; 
@Injectable()
export class RestDataSource{
    baseUrl: String;
    constructor(private http: HttpClient){  
        this.baseUrl=`${PROTOCOL}://${location.hostname}:${PORT}/`;
    }
    // saveCart(order:Order):Observable<Cart>{
    //     return this.http.post<Cart>(this.baseUrl+"api/orders/save",order.cart);
    // }
    getProducts():Observable<Product[]>{
        return this.http.get<Product[]>(this.baseUrl+"api/products/all");
    }
    saveOrder(order:Order):Observable<Order>{
        return this.http.post<Order>(this.baseUrl+"api/orders/save",order);
    }
}