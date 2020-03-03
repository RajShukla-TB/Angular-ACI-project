import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { StaticDataSource } from './static.datasource';
@Injectable()
export class ProductRepository{
    private products: Product[]=[];

    private categories: String[]=[];

    constructor(private dataSource: StaticDataSource){
        dataSource.getProducts().subscribe(data=>{
            this.products=data;
            this.categories=data.map(p=>p.category).filter((c,index,array)=>array.indexOf(c)==index)
            .sort();
        });
    }
    getProducts( category1: String = null): Product[]{
        return this.products.filter(p=>category1==null || category1==p.category);
    }
    getCategory(): String[]{
        return this.categories;
    }
    getProduct(id: Number): Product{
        return this.products.find(p=>p.id==id);
    }
    
}