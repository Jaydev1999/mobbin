import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IOsAppsComponent } from './components/ios/i-os-apps/i-os-apps.component';
import { IOsScreensComponent } from './components/ios/i-os-screens/i-os-screens.component';
import { IOsFlowsComponent } from './components/ios/i-os-flows/i-os-flows.component';
import { IOsAppsCardViewDataComponent } from './components/ios/i-os-apps-card-view-data/i-os-apps-card-view-data.component';
import { AndroidAppsComponent } from './components/android/android-apps/android-apps.component';
import { AndroidScreensComponent } from './components/android/android-screens/android-screens.component';
import { AndroidFlowsComponent } from './components/android/android-flows/android-flows.component';
import { WebAppsComponent } from './components/web/web-apps/web-apps.component';
import { WebScreensComponent } from './components/web/web-screens/web-screens.component';
import { WebFlowsComponent } from './components/web/web-flows/web-flows.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomeComponent } from './home/home.component';
import { AndroidAppsCardDataViewComponent } from './components/android/android-apps-card-data-view/android-apps-card-data-view.component';
import { CardViewTabsComponent } from './components/card-view-tabs/card-view-tabs.component';
import { FlowSectionMoreInfoComponent } from './components/android/flow-section-more-info/flow-section-more-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/browse/ios/apps', pathMatch: 'full' },
  {
    path: 'browse',
    component: HomeComponent,
    children: [
      // iOS device Routes link
      {
        path: 'ios',
        children: [
          { path: 'apps', component: IOsAppsComponent },
          { path: 'screens', component: IOsScreensComponent },
          { path: 'flows', component: IOsFlowsComponent },
        ],
      },
      // Android device Routes link
      {
        path: 'android',
        children: [
          { path: 'apps', component: AndroidAppsComponent },
          { path: 'screens', component: AndroidScreensComponent },
          { path: 'flows', component: AndroidFlowsComponent },
        ],
      },
      // Web device Routes link
      {
        path: 'web',
        children: [
          { path: 'apps', component: WebAppsComponent },
          { path: 'screens', component: WebScreensComponent },
          { path: 'flows', component: WebFlowsComponent },
        ],
      },
    ],
  },
  { path: 'login', component: LoginPageComponent },
  { path: 'apps/:cardTitle-android', component: CardViewTabsComponent },
  {
    path: 'apps',
    component: CardViewTabsComponent,
    children: [
      {
        path: ':cardTitle-android',
        component: AndroidAppsCardDataViewComponent,
      },
      {
        path: ':cardTitle-ios',
        component: IOsAppsCardViewDataComponent,
      },
    ],
  },
  {
    path: 'flows/:sectionTitle',
    component: FlowSectionMoreInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
