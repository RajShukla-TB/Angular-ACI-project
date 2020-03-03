import { Component } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';
import { Cart } from '../model/cart.model';

@Component({
    selector: "acistore",
    templateUrl: "acistore.component.html"
})
export class AciStoreComponent{
    public selectedCategory= null;

    public productsPerPage=3;
    public selectedPage=1;
    constructor(private repository: ProductRepository,private cart: Cart){}
    get products(): Product[]{
        let pageIndex=(this.selectedPage-1)*this.productsPerPage;
        
        //
        return this.repository.getProducts(this.selectedCategory).slice(pageIndex,pageIndex+this.productsPerPage);
    }
    get categories(): String[]{
        return this.repository.getCategory();
    }
    changeCategory(newCategory?: String){
        this.selectedCategory=newCategory;
        this.selectedPage=1;
    }
    changePage(newPage: number){
        this.selectedPage=newPage;
    }
    changePageSize(newSize: Number){
        this.productsPerPage=Number(newSize);
        this.selectedPage=1;
    }
    get PageNumbers():number[]{
        return Array(Math.ceil(this.repository.getProducts(this.selectedCategory).length/this.productsPerPage)).fill(0).map((x,i)=>i+1);
    }

    addProductToCart(product: Product){
        this.cart.addLine(product);
    }
}