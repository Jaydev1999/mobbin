import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidFlowsComponent } from './android-flows.component';

describe('AndroidFlowsComponent', () => {
  let component: AndroidFlowsComponent;
  let fixture: ComponentFixture<AndroidFlowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndroidFlowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AndroidFlowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
