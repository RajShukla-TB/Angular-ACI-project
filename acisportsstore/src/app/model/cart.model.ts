import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class Cart{
    public lines: CartLine[]=[];
    public itemCount: number = 0;
    public cartPrice: number = 0;
    // public finalstr: String="";
    addLine(product: Product,quantity: number=1){
        let line=this.lines.find(line=>line.product.id==product.id);
        if(line!=undefined){
            line.quantity+=quantity;
        }else{
            this.lines.push(new CartLine(product,quantity))
        }
        this.recalculate();
    }
    updateQuantity(product: Product,quantity: number){
        let line=this.lines.find(line=>line.product.id==product.id);
        if(line!=undefined){
            line.quantity=Number(quantity);
        }
        this.recalculate();
    }
    removeLine(id: number){
        let line=this.lines.findIndex(line=>line.product.id==id);
        this.lines.splice(line,1);
        this.recalculate();
    }
    clear(){
        this.lines=[];
        this.itemCount = 0;
        this.cartPrice = 0; 
    }
    // stringit(){
    //     this.lines.forEach(function (value){
    //         this.finalstr=this.finalstr + value.product +" "+ value.quantity+", ";
    //     })
    // }

    private recalculate(){
        this.itemCount=0;
        this.cartPrice=0;
        this.lines.forEach(l=>{
            this.itemCount+=l.quantity;
            this.cartPrice+=(l.quantity*l.product.price);
        });
    }
}
export class CartLine{
    public constructor(public product: Product, public quantity: number){}
    get lineTotal(){
        return this.quantity*this.product.price;
    }
}