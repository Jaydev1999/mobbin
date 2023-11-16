import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreensComponentComponent } from './screens-component.component';

describe('ScreensComponentComponent', () => {
  let component: ScreensComponentComponent;
  let fixture: ComponentFixture<ScreensComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreensComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreensComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
