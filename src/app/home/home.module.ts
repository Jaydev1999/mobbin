import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AndroidAppsCardDataViewComponent } from '../components/android/android-apps-card-data-view/android-apps-card-data-view.component';
import { AndroidAppsComponent } from '../components/android/android-apps/android-apps.component';
import { AndroidComponentComponent } from '../components/android/android-component/android-component.component';
import { AndroidFlowsComponent } from '../components/android/android-flows/android-flows.component';
import { AndroidScreensComponent } from '../components/android/android-screens/android-screens.component';
import { AppsComponentComponent } from '../components/apps-component/apps-component.component';
import { CardsDataComponent } from '../components/cards-data/cards-data.component';
import { CarouselSliderComponent } from '../components/carousel-slider/carousel-slider.component';
import { FlowsComponentComponent } from '../components/flows-component/flows-component.component';
import { IOsAppsComponent } from '../components/ios/i-os-apps/i-os-apps.component';
import { IOsFlowsComponent } from '../components/ios/i-os-flows/i-os-flows.component';
import { IOsScreensComponent } from '../components/ios/i-os-screens/i-os-screens.component';
import { IOSComponentComponent } from '../components/ios/i-os-component/i-os-component.component';
import { IOsAppsCardViewDataComponent } from '../components/ios/i-os-apps-card-view-data/i-os-apps-card-view-data.component';
import { LoginPageComponent } from '../components/login-page/login-page.component';
import { WebAppsComponent } from '../components/web/web-apps/web-apps.component';
import { WebComponentComponent } from '../components/web/web-component/web-component.component';
import { WebFlowsComponent } from '../components/web/web-flows/web-flows.component';
import { WebScreensComponent } from '../components/web/web-screens/web-screens.component';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { ScreensComponentComponent } from '../components/screens-component/screens-component.component';
import { SecondNavigation } from '../components/second-navigation/second-navigation.component';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from '../app-routing.module';
import { ReplacePercentPipe } from '../pipe/replace-percent.pipe';
import { CardViewTabsComponent } from '../components/card-view-tabs/card-view-tabs.component';
import { MatModule } from '../module/mat/mat.module';
import { FiltersComponent } from '../components/filters/filters.component';
import { FlowTreeComponent } from '../components/android/flow-tree/flow-tree.component';
import { FlowsScreenAndroidComponent } from '../components/android/flows-screen-android/flows-screen-android.component';
import { FlowSectionMoreInfoComponent } from '../components/android/flow-section-more-info/flow-section-more-info.component';

const components = [
  NavBarComponent,
  CarouselSliderComponent,
  SecondNavigation,
  IOSComponentComponent,
  AndroidComponentComponent,
  WebComponentComponent,
  AppsComponentComponent,
  ScreensComponentComponent,
  FlowsComponentComponent,
  IOsAppsComponent,
  IOsScreensComponent,
  IOsFlowsComponent,
  AndroidFlowsComponent,
  AndroidAppsComponent,
  AndroidScreensComponent,
  WebFlowsComponent,
  WebAppsComponent,
  WebScreensComponent,
  LoginPageComponent,
  AndroidAppsCardDataViewComponent,
  CardsDataComponent,
  HomeComponent,
  ReplacePercentPipe,
  CardViewTabsComponent,
  IOsAppsCardViewDataComponent,
  FiltersComponent,
  FlowTreeComponent,
  FlowsScreenAndroidComponent,
  FlowSectionMoreInfoComponent
];
const modules = [];
@NgModule({
  declarations: [...components],
  imports: [CommonModule, CarouselModule, AppRoutingModule, MatModule],
  exports: [...components, MatModule],
})
export class HomeModule {}
