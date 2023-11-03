import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproduct } from 'src/app/shared/modal/products';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  productId!: string;
  productObj!: Iproduct;
  constructor(
    private _route: ActivatedRoute,
    private _productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.getProductidAndDetails();
  }

  getProductidAndDetails() {
    // this.productId = this._route.snapshot.params['productsId'];
    // if(this.productId){
    //   this.productObj = this._productsService.getSingleProduct(this.productId)
    // }

    this._route.params.subscribe((params: Params) => {
      console.log(params);
      this.productId = params['productsId'];
      if (this.productId) {
        this.productObj = this._productsService.getSingleProduct(this.productId);
      }
    });
  }
}
