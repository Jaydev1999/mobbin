import { Component, HostListener, OnInit } from '@angular/core';
import { AndroidAppsDataService } from '../../service/android-apps-data.service';
import { ScrollService } from '../../service/scroll.service';
import { Router } from '@angular/router';
import { ReplacePercentPipe } from 'src/app/pipe/replace-percent.pipe';

@Component({
  selector: 'app-flows-screen-android',
  templateUrl: './flows-screen-android.component.html',
  styleUrls: ['./flows-screen-android.component.scss'],
})
export class FlowsScreenAndroidComponent implements OnInit {
  flowTreeAndroid: any;
  activeCurrentSection: any;

  constructor(
    private flowTree: AndroidAppsDataService,
    private scrollService: ScrollService,
    private router: Router,
    private replaceSpaceLowerTitleCardPipe: ReplacePercentPipe
  ) {
    const getCardAppsID = localStorage.getItem('cardAppsID');

    if (getCardAppsID) {
      const getCard = this.flowTree.getCardData();
      const matchingCard = getCard.find(
        (card) => card.cardAppsID === getCardAppsID
      );
      if (
        matchingCard &&
        matchingCard.android &&
        matchingCard.android.flowTree
      ) {
        this.flowTreeAndroid = matchingCard.android.flowTree.map(
          (data, index, array) => {
            const vrLine = data.VRline;
            const prevData = array
              .slice(0, index)
              .reverse()
              .find((prevVR) => prevVR.VRline < vrLine);
            const nearestName = prevData ? prevData.flowTreeTitle : '';
            const title = data.flowTreeTitle;
            const updatedData = {
              ...data,
              flowTreeTitle: title,
              prevData: nearestName,
            };
            return updatedData;
          }
        );
      } else {
        this.flowTreeAndroid = [];
      }
    }
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: any) {
    let currentSectionId: string | undefined = undefined;

    this.flowTreeAndroid.forEach((item: any) => {
      const elementId = item.flowTreeTitle;
      const sectionElement = document.getElementById(elementId);
      if (sectionElement && window.scrollY >= sectionElement.offsetTop - -522) {
        currentSectionId = elementId;
      }
    });

    if (currentSectionId !== undefined) {
      this.scrollService.setActiveSection(currentSectionId);
    }
  }
  showSection(targetSectionTitle: string): void {
    const targetSectionElement = document.getElementById(targetSectionTitle);
    const headerHeight = 126;
    const offset =
      targetSectionElement!.getBoundingClientRect().top +
      window.scrollY -
      headerHeight;
    if (targetSectionElement) {
      window.scrollTo({ top: offset });
    }
  }
  openSection(titleName: string) {
    var sectionTitle = this.replaceSpaceLowerTitleCardPipe.transform(titleName);
    this.router.navigate(['flows', sectionTitle]);
  }

  ngOnInit(): void {
    this.onWindowScroll(null);
  }
}
