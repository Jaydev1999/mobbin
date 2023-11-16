import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IOsAppsCardViewDataComponent } from './i-os-apps-card-view-data.component';

describe('IOsAppsCardViewDataComponent', () => {
  let component: IOsAppsCardViewDataComponent;
  let fixture: ComponentFixture<IOsAppsCardViewDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IOsAppsCardViewDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IOsAppsCardViewDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
