import { Injectable } from "@angular/core";
import { Order } from './order.model';
import { StaticDataSource } from './static.datasource';
import { Observable } from 'rxjs';

@Injectable()
export class OrderRepository{
    private order: Order[]=[];
    constructor(private datasource: StaticDataSource){}
    getOrder(){
        return this.order;
    }
    saveOrder(order: Order):Observable<Order>{
        return this.datasource.saveOrder(order);
    }
}
