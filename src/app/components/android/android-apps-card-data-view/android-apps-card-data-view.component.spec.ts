import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidAppsCardDataViewComponent } from './android-apps-card-data-view.component';

describe('AndroidAppsCardDataViewComponent', () => {
  let component: AndroidAppsCardDataViewComponent;
  let fixture: ComponentFixture<AndroidAppsCardDataViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndroidAppsCardDataViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AndroidAppsCardDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
