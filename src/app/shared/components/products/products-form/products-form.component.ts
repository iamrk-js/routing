import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/modal/products';
import { ProductsService } from 'src/app/shared/services/products.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {
  productForm !: FormGroup;
  isInEditMode: boolean = false;
  productId !: string;
  productObj !: Iproduct;
  private _routes = inject(ActivatedRoute);
  private _uuidService = inject(UuidService);
  private _productsService = inject(ProductsService);
  private _router = inject(Router)
  constructor() { }

  ngOnInit(): void {
    this.createProdForm();
    this.getUserIdAndDetails();
    this._routes.params
      .subscribe((params: Params) => {
        this.productId = params['productsId'];
        if (this.productId) {
          this.productObj = this._productsService.getSingleProduct(this.productId);
          this.productForm.patchValue(this.productObj)
        }
      })

    this._routes.queryParams
      .subscribe((params: Params) => {
        console.log(params['canEdit']);
        let canEditState = +params['canEdit']
        if (!canEditState) {
          this.productForm.disable()
        } else {
          this.productForm.enable()
        }
      })
  }

  getUserIdAndDetails() {
    this._routes.params
      .subscribe((params: Params) => {
        console.log(params);
        this.productId = params['productsId'];
        if (this.productId) {
          this.isInEditMode = true
        }
      })
  }

  createProdForm() {
    this.productForm = new FormGroup({
      pName: new FormControl(null, [Validators.required]),
      pStatus: new FormControl(null, [Validators.required])
    })
  }
  onSubmit() {
    if (!this.isInEditMode && this.productForm.valid) {
      console.log(`Product is Added !!!`);
      let canValue = Math.random() >= .5 ? 1 : 0
      let newProd = { ...this.productForm.value, pId: this._uuidService.uuid(), canReturn: canValue };
      console.log(newProd);
      this._productsService.addProduct(newProd);
      this._router.navigate(['/products'])
    }
  }

  onUpdateProduct() {
    if (this.isInEditMode) {
      console.log(`Product is updated !!!`);
      let updatedObj: Iproduct = {
        ...this.productForm.value,
        pId: this.productId
      }
      console.log(updatedObj);
      this._productsService.updateProduct(updatedObj);
      this._router.navigate(['products'])
    }
  }
}


