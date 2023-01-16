import { Component, OnInit } from '@angular/core';
import  { Swiper, Pagination, Navigation, Keyboard, Manipulation } from 'swiper';
@Component({
  selector: 'app-our-apis-component',
  templateUrl: './our-apis-component.component.html',
  styleUrls: ['./our-apis-component.component.scss'],
})
export class OurApisComponentComponent  implements OnInit {
  constructor() {
    
  }

  ngOnInit() {
    const swiper = new Swiper('.swiper', {
      breakpoints: {
        992: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        750: {
          slidesPerView: 3,
          spaceBetween: 15
        },
        570: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        350: {
          slidesPerView: 1,
          spaceBetween: 10
        },
      },
      loopedSlides: 1,
      slidesPerView: 'auto',
      centeredSlidesBounds: true,
      centerInsufficientSlides: true,
      autoHeight: true,
      controller: {
        by: 'container'
      },
      direction: 'horizontal',
      modules: [ Navigation, Pagination, Keyboard, Manipulation ],
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
      },
     navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    });
  }
}
