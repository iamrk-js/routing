import { Injectable } from '@angular/core';
import { Iproduct } from '../modal/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsArray : Array<Iproduct> = [
    {
      pName: 'Samsung M31',
      pId: '1',
      pStatus: 'In Progress',
      canReturn : 1
    },
    {
      pName: 'Samsung TV LED',
      pId: '2',
      pStatus: 'Dispathched',
      canReturn : 1
    },
    {
      pName: 'Iphone 14',
      pId: '3',
      pStatus: 'In Progress',
      canReturn : 0
    },
    {
      pName: 'Sony Headphone',
      pId: '4',
      pStatus: 'Delevered',
      canReturn : 0
    },
  ];
  constructor() { }

  getAllProducts(): Array<Iproduct>{
    return this.productsArray
  }

  getSingleProduct(id:string): Iproduct{
    return this.productsArray.find(prod => prod.pId === id)!
  }

  addProduct(product: Iproduct){
    this.productsArray.push(product)
  }

  updateProduct(updatedProd: Iproduct){
    let getIndex = this.productsArray.findIndex(prod => {
      return prod.pId === updatedProd.pId
    })
    this.productsArray[getIndex].pName = updatedProd.pName;
    this.productsArray[getIndex].pStatus = updatedProd.pStatus;
  }
}
