import { Component, OnInit, OnDestroy } from '@angular/core';
import { AndroidAppsDataService } from '../../service/android-apps-data.service';
import { ScrollService } from '../../service/scroll.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-flow-tree',
  templateUrl: './flow-tree.component.html',
  styleUrls: ['./flow-tree.component.scss'],
})
export class FlowTreeComponent implements OnInit, OnDestroy {
  flowTreeAndroid: any;
  private activeItemSubscription: Subscription;
  selectedIndex: number | null = null;

  constructor(
    private flowTree: AndroidAppsDataService,
    private scrollingService: ScrollService
  ) {
    const getCardAppsID = localStorage.getItem('cardAppsID');

    if (getCardAppsID) {
      const getCard = this.flowTree.getCardData();
      const matchingCard = getCard.find(
        (card) => card.cardAppsID === getCardAppsID
      );
      this.flowTreeAndroid = matchingCard?.android.flowTree;
    }

    // Subscribe to activeItemChange from ScrollService
    this.activeItemSubscription =
      this.scrollingService.activeItemChange.subscribe((activeItem: string) => {
        const activeIndex = this.flowTreeAndroid.findIndex(
          (item: any) => item.flowTreeTitle === activeItem
        );
        this.selectedIndex = activeIndex !== -1 ? activeIndex : null;
      });
  }

  createVRline(length: number) {
    const lineArray = Array.from({ length }, (index: number) => index + 1);
    return lineArray;
  }

  selectedTitle(index: number): void {
    const sectionId = this.flowTreeAndroid[index].flowTreeTitle;
    const sectionElement = document.getElementById(sectionId);
    const headerHeight = 126;
    const offset =
      sectionElement!.getBoundingClientRect().top +
      window.scrollY -
      headerHeight;
    window.scrollTo({ top: offset });
    this.scrollingService.setActiveSection(sectionId);
    this.selectedIndex = index;
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.activeItemSubscription.unsubscribe();
  }
}
