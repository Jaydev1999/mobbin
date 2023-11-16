import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReplacePercentPipe } from 'src/app/pipe/replace-percent.pipe';
import { AndroidAppsDataService } from '../../service/android-apps-data.service';

@Component({
  selector: 'app-android-apps',
  templateUrl: './android-apps.component.html',
  styleUrls: ['./android-apps.component.scss'],
  providers: [ReplacePercentPipe],
})
export class AndroidAppsComponent implements OnInit {
  cards: any[] = [];

  constructor(
    private router: Router,
    private cardDataService: AndroidAppsDataService,
    private replaceSpaceLowerTitleCardPipe: ReplacePercentPipe
  ) {}

  ngOnInit() {
    this.cards = this.cardDataService.getCardData();
    // console.log(this.cards);
  }

  carouselOptions = {
    loop: false,
    nav: true,
    navText: [
      '<img src="../../../assets/icon/rightarrow.png" alt="Previous">',
      '<img src="../../../assets/icon/leftarrow.png" alt="Next">',
    ],
    dots: true,
    touchDrag: false,
    mouseDrag: false,
    dotsEach: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  currentCard(carddata: any) {}
  stopPropagation(event: Event) {
    event.stopPropagation();
    this.saveOrDownload();
  }
  saveOrDownload() {}

  androidCarddataView(carddata: any) {
    const UrlCardTitle = this.replaceSpaceLowerTitleCardPipe.transform(
      carddata.cardTitle
    );
    localStorage.setItem('cardAppsID', carddata.cardAppsID);
    this.router.navigate([`/apps/${UrlCardTitle}-android`]);
  }
}
