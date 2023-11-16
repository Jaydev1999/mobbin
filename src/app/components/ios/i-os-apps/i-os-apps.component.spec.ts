import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IOsAppsComponent } from './i-os-apps.component';

describe('IOsAppsComponent', () => {
  let component: IOsAppsComponent;
  let fixture: ComponentFixture<IOsAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IOsAppsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IOsAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
