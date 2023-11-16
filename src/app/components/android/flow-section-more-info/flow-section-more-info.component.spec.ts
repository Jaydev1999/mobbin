import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowSectionMoreInfoComponent } from './flow-section-more-info.component';

describe('FlowSectionMoreInfoComponent', () => {
  let component: FlowSectionMoreInfoComponent;
  let fixture: ComponentFixture<FlowSectionMoreInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowSectionMoreInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowSectionMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
