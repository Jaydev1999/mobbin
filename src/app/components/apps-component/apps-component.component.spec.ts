import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsComponentComponent } from './apps-component.component';

describe('AppsComponentComponent', () => {
  let component: AppsComponentComponent;
  let fixture: ComponentFixture<AppsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
