import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Order } from './order.model';
@Injectable()//decorator(s)--Similar to annotation s in java. Used to provide
//instructions to or information or metadata to angular framework...EG--@injectable() used to instruct 
// angular that underlying class will be used in DI.
//@NgModule is used to informs that the underlying class will work as a module.
//if in application structure diagram, connecting arrow that is coming into the box2 from box1....means box2 will use box1
//if in application structure diagram, connecting arrow that is touching the box2 from box1....means box2 will be dependency for box1
export class StaticDataSource{
    private products: Product[]=[
        new Product(1,"Product 1","Category 1","Product 1 (Category 1)",12),
        new Product(2,"Product 2","Category 1","Product 2 (Category 1)",120),
        new Product(3,"Product 3","Category 1","Product 3 (Category 1)",15),
        new Product(4,"Product 4","Category 2","Product 4 (Category 1)",180),
        new Product(5,"Product 5","Category 1","Product 5 (Category 1)",1230),
        new Product(6,"Product 6","Category 2","Product 6 (Category 2)",23),
        new Product(7,"Product 7","Category 2","Product 7 (Category 2)",3),
        new Product(8,"Product 8","Category 1","Product 8 (Category 2)",13),
        new Product(9,"Product 9","Category 2","Product 9 (Category 2)",45),
        new Product(10,"Product 10","Category 2","Product 10 (Category 2)",1563),
        new Product(11,"Product 11","Category 3","Product 11 (Category 3)",163),
        new Product(12,"Product 12","Category 3","Product 12 (Category 3)",1663),
        new Product(13,"Product 13","Category 3","Product 13 (Category 3)",673),
        new Product(14,"Product 14","Category 3","Product 14 (Category 3)",13),
        new Product(15,"Product 15","Category 3","Product 15 (Category 3)",43)
    ];

    getProducts():Observable<Product[]>{
        return from([this.products]);
    }

    saveOrder(order: Order):Observable<Order>{
        console.log(JSON.stringify(order));
        return from([order]);
    }
    
}