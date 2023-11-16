import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private activeItem = '';
  public activeItemChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  setActiveSection(sectionId: string): void {
    this.activeItem = sectionId;
    this.activeItemChange.emit(this.activeItem);
  }

  getActiveSection(): string {
    return this.activeItem;
  }

  scrollToIndex(sectionId: string): void {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'auto', block: 'center' });
    }
  }
}
