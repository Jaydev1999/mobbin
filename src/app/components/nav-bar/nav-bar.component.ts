import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
  popupOpen = false;

  constructor(private router: Router) { }

  onLoginClick() {
    this.router.navigate(['/login']);
  }

  clicked__version__btn: number = 1;

  versionActive(btnNumber: number) {
    this.clicked__version__btn = btnNumber;
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }
  closePopup() {
    this.popupOpen = false;
    document.body.classList.remove('no-scroll');
  }
  openPopup() {
    this.popupOpen = true;
    document.body.classList.add('no-scroll');
  }
  ngOnInit() {
    document.addEventListener("keydown", (event) => {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        this.openPopup();
      }
    });
  }

}
