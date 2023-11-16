import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebFlowsComponent } from './web-flows.component';

describe('WebFlowsComponent', () => {
  let component: WebFlowsComponent;
  let fixture: ComponentFixture<WebFlowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebFlowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebFlowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
