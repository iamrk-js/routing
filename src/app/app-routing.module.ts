import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './shared/components/products/products.component';
import { UsersComponent } from './shared/components/users/users.component';
import { HomeComponent } from './shared/components/home/home.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { UserComponent } from './shared/components/users/user/user.component';
import { UserFormComponent } from './shared/components/users/user-form/user-form.component';
import { ProductsFormComponent } from './shared/components/products/products-form/products-form.component';

// localhost:4200
const appRoute: Routes = [
  {
    path: '', // localhost:4200
    component: HomeComponent,
  },
  {
    path: 'home', // localhost:4200/home
    component: HomeComponent,
  },
  {
    path: 'products', // localhost:4200/products
    component: ProductsComponent,
    children : [
      {
        path: 'add', // localhost:4200/products/1
        component: ProductsFormComponent,
      },
      {
        path: ':productsId', // localhost:4200/products/1
        component: ProductComponent,
      },
      {
        path: ':productsId/edit', // localhost:4200/products/1
        component: ProductsFormComponent,
      }
    ]
  },
  
  {
    path: 'users', // localhost:4200/users
    component: UsersComponent,
    children : [
      {
        path: 'add', // localhost:4200/users/add >> :userId is a params
        component: UserFormComponent,
      },
      {
        path: ':userId', // localhost:4200/users/1 >> :userId is a params
        component: UserComponent,
      },
      {
        path: ':userId/edit', // localhost:4200/users/1 >> :userId is a params
        component: UserFormComponent,
      },
    ]
  },
  
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
