import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidAppsComponent } from './android-apps.component';

describe('AndroidAppsComponent', () => {
  let component: AndroidAppsComponent;
  let fixture: ComponentFixture<AndroidAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndroidAppsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AndroidAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
