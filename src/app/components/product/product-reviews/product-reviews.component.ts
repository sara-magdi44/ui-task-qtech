import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons/faStarHalfAlt';
@Component({
  selector: 'app-product-reviews',
  imports: [FontAwesomeModule],
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.scss']
})
export class ProductReviewsComponent {

  rating_stars = [1, 2, 3, 4, 5];

  ratings = [
    { value: 5, percentage: 50, count: 625 },
    { value: 4, percentage: 30, count: 375 },
    { value: 3, percentage: 10, count: 125 },
    { value: 2, percentage: 2, count: 87 },
    { value: 1, percentage: 1, count: 38 }
  ];
  faStar = faStar ;
  faStarHalfAlt = faStarHalfAlt;

}
