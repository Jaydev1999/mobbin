import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidScreensComponent } from './android-screens.component';

describe('AndroidScreensComponent', () => {
  let component: AndroidScreensComponent;
  let fixture: ComponentFixture<AndroidScreensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndroidScreensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AndroidScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
