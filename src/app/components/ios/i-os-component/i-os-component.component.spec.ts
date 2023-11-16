import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IOSComponentComponent } from './i-os-component.component';

describe('IOSComponentComponent', () => {
  let component: IOSComponentComponent;
  let fixture: ComponentFixture<IOSComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IOSComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IOSComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
