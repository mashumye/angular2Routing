import {Component, OnInit} from '@angular/core';
import {ProductService} from "./product.service";
import {Product} from "./Product";
import {Router} from "@angular/router";

@Component({
    moduleId:module.id,
    selector: 'my-dashboard',
    styleUrls:['dashboard.component.css'],
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    products: Product[] = [];

    constructor(private router: Router, private productService: ProductService) { }

    ngOnInit(): void {
        this.productService.getProducts()
            .then(products => this.products = products.slice(1, 5));
    }

    gotoDetail(product:Product): void {

        let link = ['/detail', product.id];
        this.router.navigate(link);

    }
}