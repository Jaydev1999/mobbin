import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowsComponentComponent } from './flows-component.component';

describe('FlowsComponentComponent', () => {
  let component: FlowsComponentComponent;
  let fixture: ComponentFixture<FlowsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
