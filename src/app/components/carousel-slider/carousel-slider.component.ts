import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselComponent } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel-slider',
  templateUrl: './carousel-slider.component.html',
  styleUrls: ['./carousel-slider.component.scss']
})
export class CarouselSliderComponent implements OnInit {
  // @ViewChild('owlCarousel') owlCarousel!: CarouselComponent;
  // @ViewChild('carouselIndicators') carouselIndicators!: ElementRef;
  // private intervalID: any;

  progressBarActiveIndex = 0;

  constructor() { }

  customOptions: OwlOptions = {
    animateOut: "fadeOut",
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 4000,
    dots: false,
    mouseDrag: false,
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false
  }

  ngOnInit() {
    this.startProgressBar();

    // this.fillCarouselIndicator(1);
    // const header = document.getElementById("myDIV");
    // console.log(header);
    // if (header) {
    //   const btns = header.getElementsByClassName("btn");
    //   for (let i = 0; i < btns.length; i++) {
    //     btns[i].addEventListener("click", function () {
    //       var current = document.getElementsByClassName("active");
    //       current[0].className = current[0].className.replace(" active", "");

    //     })

    //   }
    // }
  }
  startProgressBar() {
    const progressBarCount = 4; // Total number of progress bars
    const progressBarDuration = 4000; // Duration in milliseconds for each progress bar

    const intervalId = setInterval(() => {
      if (this.progressBarActiveIndex < progressBarCount) {
        this.progressBarActiveIndex++;
      } else {
        clearInterval(intervalId);
        this.progressBarActiveIndex = 0; // Reset the index to start over
        this.startProgressBar(); // Start the progress bars again
      }
    }, progressBarDuration);
  }

  // fillCarouselIndicator(index: number): void {
  //   let i = 0;
  //   const carouselIndicators = Array.from(document.querySelectorAll('.carousel-indicators button span'));

  //   for (const carouselIndicator of carouselIndicators) {
  //     (carouselIndicator as HTMLElement).style.width = '0';
  //   }

  //   clearInterval(this.intervalID);
  //   const autoplayTimeout = 4000; // Time in milliseconds
  //   // this.owlCarousel.pause();

  //   this.intervalID = setInterval(() => {
  //     i++;
  //     const activeSpan = document.querySelector('.carousel-indicators .active span');
  //     if (activeSpan) {
  //       (activeSpan as HTMLElement).style.width = i + '%';
  //     }

  //     if (i >= 4000) {
  //       // this.owlCarousel.next();
  //     }
  //   }, 10);
  // }
}
