import { Component } from '@angular/core';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RelatedProductComponent } from './related-product/related-product.component';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';
@Component({
  selector: 'app-product',
  imports: [ 
    ProductDetailsComponent,
    RelatedProductComponent,
    ProductReviewsComponent
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

}
