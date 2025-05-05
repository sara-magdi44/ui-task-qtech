import { Component } from '@angular/core';

@Component({
  selector: 'app-related-product',
  imports: [],
  templateUrl: './related-product.component.html',
  styleUrl: './related-product.component.scss'
})
export class RelatedProductComponent {
  prodcuts = [
    {
      id: 1,
      name: 'Whistle',
      describtion: "Wide Leg Cropped Jeans,Denim",
      image: '/assets/images/products/product1.png',
      price: '$26',
      rating: 4.8,
      sold:1.238
    },
    {
      id: 2,
      name: 'John Lewis ANYDAY',
      describtion: "Long Sleeve Utility Shirt, Navy, 6",
      image: 'assets/images/products/product2.png',
      price: '$26',
      rating: 4.8,
      sold:1.238
    },
    {
      id: 3,
      name: 'John Lewis ANYDAY',
      describtion: "Stripe Curved Hem Shirt, Blue",
      image: 'assets/images/products/product3.png',
      price: '$32',
      rating: 4.5 ,
      sold:620
    },
    {
      id: 4,
      name: 'John Lewis ANYDAY',
      describtion: "Denim Overshirt, Mid Wash",
      image: '/assets/images/products/product4.png',
      price: '$40',
      rating: 4.6,
      sold:238
    },
    {
      id: 4,
      name: 'John Lewis',
      describtion: "Linen Blazer, Navy",
      image: 'assets/images/products/product5.png',
      price: '$79',
      rating: 4.8,
      sold:1.238
    }
  ]
}
