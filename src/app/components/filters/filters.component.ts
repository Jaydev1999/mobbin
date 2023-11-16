import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  isNavOpen: boolean = false;
  sidenavWidth: string = '0';
  sidenavdisplay: string = 'none';
  isNavbarOpen = false;

  placeholderText: string = 'Add Filter';
  isExpanded: boolean = false;
  svgStrokeColor: string = 'currentColor';

  constructor(private router: Router) {}

  expandInput() {
    this.placeholderText = 'Search for filters (try Shopping)';
    this.isExpanded = true;
    this.svgStrokeColor = '#000';
  }

  resetInput() {
    this.isExpanded = false;
    this.svgStrokeColor = 'currentColor';
    this.placeholderText = 'Add Filter';
  }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
    this.sidenavWidth = this.isNavOpen ? '280px' : '0';
    this.sidenavdisplay = this.isNavOpen ? 'flex' : 'none';
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  ngOnInit(): void {}
}
