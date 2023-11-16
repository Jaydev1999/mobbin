import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IOsScreensComponent } from './i-os-screens.component';

describe('IOsScreensComponent', () => {
  let component: IOsScreensComponent;
  let fixture: ComponentFixture<IOsScreensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IOsScreensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IOsScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
