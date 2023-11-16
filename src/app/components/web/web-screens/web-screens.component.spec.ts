import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebScreensComponent } from './web-screens.component';

describe('WebScreensComponent', () => {
  let component: WebScreensComponent;
  let fixture: ComponentFixture<WebScreensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebScreensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
