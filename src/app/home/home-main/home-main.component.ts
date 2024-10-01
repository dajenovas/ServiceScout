import { Component } from '@angular/core';
import { faArrowAltCircleDown, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.scss']
})
export class HomeMainComponent {

  loader = true;

  scrollDown() {
    window.scrollBy({
      top: window.innerHeight * 1,
      behavior: 'smooth'
    });
  }
  faDown = faArrowAltCircleDown
  faRight = faArrowAltCircleRight
}
