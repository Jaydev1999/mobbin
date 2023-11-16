import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IOsFlowsComponent } from './i-os-flows.component';

describe('IOsFlowsComponent', () => {
  let component: IOsFlowsComponent;
  let fixture: ComponentFixture<IOsFlowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IOsFlowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IOsFlowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
