import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'second-navigation',
  templateUrl: './second-navigation.component.html',
  styleUrls: ['./second-navigation.component.scss'],
})
export class SecondNavigation implements OnInit {
  isNavOpen: boolean = false;
  sidenavWidth: string = '0';
  sidenavdisplay: string = 'none';
  isNavbarOpen = false;

  placeholderText: string = 'Add Filter';
  isExpanded: boolean = false;
  svgStrokeColor: string = 'currentColor';

  device_platform: number = 2;
  screen_types: number = 1;

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

  versionActive(version: number): void {
    this.device_platform = version;
  }

  screen__types(screenType: number): void {
    this.screen_types = screenType;
  }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
    this.sidenavWidth = this.isNavOpen ? '280px' : '0';
    this.sidenavdisplay = this.isNavOpen ? 'flex' : 'none';
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  updateRouterLink(): void {
    const deviceVersion = this.getDeviceActiveVersion();
    const screenType = this.getActiveScreenType();
    const url = '/browse/' + deviceVersion + '/' + screenType;
    this.router.navigateByUrl(url);
  }

  getDeviceActiveVersion(): string {
    if (this.device_platform === 1) {
      return 'ios';
    } else if (this.device_platform === 2) {
      return 'android';
    } else if (this.device_platform === 3) {
      return 'web';
    } else {
      return '';
    }
  }

  getActiveScreenType(): string {
    if (this.screen_types === 1) {
      return 'apps';
    } else if (this.screen_types === 2) {
      return 'screens';
    } else if (this.screen_types === 3) {
      return 'flows';
    } else {
      return '';
    }
  }

  ngOnInit(): void {
    // this.versionActive(1);
  }
}
