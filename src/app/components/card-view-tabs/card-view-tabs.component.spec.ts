import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardViewTabsComponent } from './card-view-tabs.component';

describe('CardViewTabsComponent', () => {
  let component: CardViewTabsComponent;
  let fixture: ComponentFixture<CardViewTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardViewTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardViewTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
