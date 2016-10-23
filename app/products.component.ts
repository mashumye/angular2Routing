import { Component } from '@angular/core';
import { Product } from './Product';
import { ProductService } from './product.service';
import { OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
    moduleId:module.id,
    selector: 'my-products',
    styleUrls:['products.component.css'],
    templateUrl:'products.component.html'
})
export class ProductsComponent implements OnInit{

    products:Product[];
    selectedProduct:Product;

    constructor(private router: Router,private productService:ProductService){

    }

    getProducts():void {
        this.productService.getProducts().then(products=>this.products=products);
    }
    ngOnInit():void {
        this.getProducts();
    }

    onSelect(product: Product): void {
        this.selectedProduct = product;
    }
    gotoDetail(){
        this.router.navigate(['/detail',this.selectedProduct.id]);
    }
}