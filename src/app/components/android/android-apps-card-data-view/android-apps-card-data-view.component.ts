import { Component, OnInit } from '@angular/core';
import { AndroidAppsDataService } from '../../service/android-apps-data.service';

@Component({
  selector: 'app-android-apps-card-data-view',
  templateUrl: './android-apps-card-data-view.component.html',
  styleUrls: ['./android-apps-card-data-view.component.scss'],
})
export class AndroidAppsCardDataViewComponent implements OnInit {
  showCardIcon: string | undefined;
  showCardTitle: string | undefined;
  showCardSpan: string | undefined;
  showCardCpy: string | undefined;
  showCardCategory: string | undefined;
  showCardCompanyHQ: string | undefined;
  activeButton: string | null = null;
  screen_types: number = 1;

  constructor(private cardDataService: AndroidAppsDataService) {}

  onButtonClick(buttonText: string) {
    this.activeButton = buttonText;
  }

  ngOnInit(): void {
    this.showCardMoreDetails();
    this.onButtonClick('Aug 2023');
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
        this.showCardIcon = matchingCard.android.cardIconsrc;
        this.showCardSpan = matchingCard.cardSpan;
        this.showCardCpy = matchingCard.cardCopyright;
        this.showCardCategory = matchingCard.cardAppCategory;
        this.showCardCompanyHQ = matchingCard.cardCompanyHQ;
      }
    }
  }
  screen__types(screenType: number): void {
    this.screen_types = screenType;
  }
}
