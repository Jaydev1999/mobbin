import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowsScreenAndroidComponent } from './flows-screen-android.component';

describe('FlowsScreenAndroidComponent', () => {
  let component: FlowsScreenAndroidComponent;
  let fixture: ComponentFixture<FlowsScreenAndroidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowsScreenAndroidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowsScreenAndroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
