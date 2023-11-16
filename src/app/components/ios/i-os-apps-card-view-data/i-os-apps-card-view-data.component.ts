import { Component, OnInit } from '@angular/core';
import { AndroidAppsDataService } from '../../service/android-apps-data.service';

@Component({
  selector: 'app-i-os-apps-card-view-data',
  templateUrl: './i-os-apps-card-view-data.component.html',
  styleUrls: ['./i-os-apps-card-view-data.component.scss'],
})
export class IOsAppsCardViewDataComponent implements OnInit {
  showCardIcon: string | undefined;
  showCardTitle: string | undefined;
  showCardSpan: string | undefined;
  showCardCpy: string | undefined;
  showCardCategory: string | undefined;
  showCardCompanyHQ: string | undefined;
  constructor(private cardDataService: AndroidAppsDataService) {}

  ngOnInit(): void {
    this.showCardMoreDetails();
  }
  showCardMoreDetails() {
    var getCardAppsID = localStorage.getItem('cardAppsID');

    if (getCardAppsID !== null) {
      const newCards = this.cardDataService.getCardData();
      const matchingCard = newCards.find(
        (card) => card.cardAppsID === getCardAppsID
      );
      if (matchingCard) {
        this.showCardTitle = matchingCard.cardTitle;
        this.showCardIcon = matchingCard.ios.cardIconsrc;
        this.showCardSpan = matchingCard.cardSpan;
        this.showCardCpy = matchingCard.cardCopyright;
        this.showCardCategory = matchingCard.cardAppCategory;
        this.showCardCompanyHQ = matchingCard.cardCompanyHQ;
      }
    }
  }
}
