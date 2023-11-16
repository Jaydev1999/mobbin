import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondNavigation } from './second-navigation.component'

describe('SecondNavigation', () => {
  let component: SecondNavigation;
  let fixture: ComponentFixture<SecondNavigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondNavigation]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SecondNavigation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
