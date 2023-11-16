import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ReplacePercentPipe } from 'src/app/pipe/replace-percent.pipe';
import { Router } from '@angular/router';
import { AndroidAppsDataService } from '../service/android-apps-data.service';
import { ScreenTypeEnum } from 'src/app/libs/enum/comman.enum';

@Component({
  selector: 'app-card-view-tabs',
  templateUrl: './card-view-tabs.component.html',
  styleUrls: ['./card-view-tabs.component.scss'],
  providers: [ReplacePercentPipe],
})
export class CardViewTabsComponent implements OnInit {
  device_platform: ScreenTypeEnum | undefined;
  ScreenTypeEnum = ScreenTypeEnum
  cardTitle: string | undefined;

  constructor(
    private replaceSpaceLowerTitleCardPipe: ReplacePercentPipe,
    private router: Router,
    private cardDataService: AndroidAppsDataService
  ) {}

  versionActive(platform: ScreenTypeEnum) {
    this.device_platform = platform;
  }

  updateRouterLink(platform: ScreenTypeEnum) {
    var getCardAppsID = localStorage.getItem('cardAppsID');
    if (getCardAppsID !== null) {
      const newCards = this.cardDataService.getCardData();
      const matchingCard = newCards.find(
        (card) => card.cardAppsID === getCardAppsID
      );
      if (matchingCard) {
        this.cardTitle = this.replaceSpaceLowerTitleCardPipe.transform(
          matchingCard?.cardTitle
        );
        if (platform === 1) {
          this.router.navigate([`/apps/${this.cardTitle}-ios`]);
        } else if (platform === 2) {
          this.router.navigate([`/apps/${this.cardTitle}-android`]);
        }
      }
    }
  }

  goToBack() {
    this.router.navigate([`/browse/ios/apps`]);
  }
  ngOnInit(): void {
    this.versionActive(ScreenTypeEnum.ANDROID);
  }
}
