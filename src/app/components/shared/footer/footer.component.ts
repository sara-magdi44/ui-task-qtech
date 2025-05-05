import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faFacebookF,
  faInstagram,
  faYoutube,
  faTwitter 
} from '@fortawesome/free-brands-svg-icons';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule]
})
export class FooterComponent {
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faTwitter = faTwitter;
  faAngleDown = faAngleDown;
  faAngleRight = faAngleRight;
  email: string = '';

  onSubmit() {
    if (this.email) {
      console.log('Subscribing email:', this.email);
    }
  }
}
