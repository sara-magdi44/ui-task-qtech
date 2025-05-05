import { Routes } from '@angular/router';
export const routes: Routes = [
    {
        // path to the product details page and also need to write the id of the product
        //  path: 'product-details',
        path: "",
        loadComponent: () =>
          import('./components/product/product.component').then(m => m.ProductComponent) 
      }
      
];
