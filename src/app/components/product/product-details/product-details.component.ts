import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  originalPreview = '/assets/images/products/slider1.png';
  previewSrc = this.originalPreview;
  FullDescription = false;
  images = [
    '/assets/images/products/slider2.png',
    '/assets/images/products/slider3.png',
    '/assets/images/products/slider4.png',
    '/assets/images/products/slider5.png',
    '/assets/images/products/slider6.png'
  ];
  product = {
    productName: 'John Lewis ANYDAY',
    productDescription: 'Long Sleeve Overshirt, Khaki, 6',
    productOldPrice: 40,
    productNewPrice: 28,
    productSold: 1.238,
    productRate: 4.5,
    fullDescription:'Boba etiam ut bulla tea est potus dilectus singulari compositione saporum et textuum, quae in Taiwan annis 1980 orta sunt. Boba refert ad pilas masticas tapiocas in fundo potus inventas, quae typice lacte tea nigro sapiuntur. Boba phaenomenon.',

  }

  sizes = ['6', '8', '10', '14', '18', '20'];
  colors = [
    'var(--primary-400)',
    'var(--neutral-200)',
    'var(--primary-500)',
    'var(--primary-900)'
  ];
  
  colorNames = [
    'Royal Brown',
    'Light Gray',
    'Navy Blue',
    'Black'
  ];

  selectedSize = this.sizes[0];
  selectedColor = this.colors[0];
  selectedColorName = this.colorNames[0];
  activeIndex: number = -1;

  selectSize(size: string) {
    this.selectedSize = size;
  }

  selectColor(color: string, index: number) {
    this.selectedColor = color;
    this.selectedColorName = this.colorNames[index];
  }

  selectImage(index: number) {
    this.previewSrc = this.images[index];
    this.activeIndex = index;
  }

  nextImage() {
    const currentIndex = this.images.indexOf(this.previewSrc);
    const nextIndex = (currentIndex + 1) % this.images.length;
    this.previewSrc = this.images[nextIndex];
    this.activeIndex = nextIndex;
  }

  prevImage() {
    const currentIndex = this.images.indexOf(this.previewSrc);
    const prevIndex = currentIndex === 0 ? this.images.length - 1 : currentIndex - 1;
    this.previewSrc = this.images[prevIndex];
    this.activeIndex = prevIndex;
  }

  Descirption(){
    this.FullDescription = !this.FullDescription;
  }
}
