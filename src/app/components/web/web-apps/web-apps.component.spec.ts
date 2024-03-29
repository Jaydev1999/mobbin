import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebAppsComponent } from './web-apps.component';

describe('WebAppsComponent', () => {
  let component: WebAppsComponent;
  let fixture: ComponentFixture<WebAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebAppsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
