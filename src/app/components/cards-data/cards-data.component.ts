import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-data',
  templateUrl: './cards-data.component.html',
  styleUrls: ['./cards-data.component.scss']
})
export class CardsDataComponent implements OnInit {

  constructor() { }

  placeholderText: string = 'Add Filter';
  isExpanded: boolean = false;
  svgStrokeColor: string = 'currentColor';

  expandInput() {
    this.placeholderText = 'Search for filters (try Shopping)'
    this.isExpanded = true;
    this.svgStrokeColor = '#000'
  }
  resetInput() {
    this.isExpanded = false;
    this.svgStrokeColor = 'currentColor';
    this.placeholderText = 'Add Filter';
  }


  clicked__version__btn: number = 1;
  versionActive(index: number) {
    this.clicked__version__btn = index;
  }

  clicked__screen_types: number = 1;
  screen__types(index: number) {
    this.clicked__screen_types = index;
  }

  isNavOpen: boolean = false;
  sidenavWidth: string = '0';
  sidenavdisplay: string = 'none';
  isNavbarOpen = false;

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
    this.sidenavWidth = this.isNavOpen ? '280px' : '0';
    this.sidenavdisplay = this.isNavOpen ? 'flex' : 'none';
    this.isNavbarOpen = !this.isNavbarOpen;
  }
  ngOnInit(): void {
    this.versionActive(1);
  }

}
