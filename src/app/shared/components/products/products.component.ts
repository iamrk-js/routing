import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../modal/products';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  prodsArr : Array<Iproduct> = []

  constructor(
    private _productsService : ProductsService
  ) { }

  ngOnInit(): void {
    this.prodsArr = this._productsService.getAllProducts()
  }

}
