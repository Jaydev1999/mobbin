import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidComponentComponent } from './android-component.component';

describe('AndroidComponentComponent', () => {
  let component: AndroidComponentComponent;
  let fixture: ComponentFixture<AndroidComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndroidComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AndroidComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
