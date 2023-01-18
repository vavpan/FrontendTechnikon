import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmistratorHomepageComponent } from './admistrator-homepage.component';

describe('AdmistratorHomepageComponent', () => {
  let component: AdmistratorHomepageComponent;
  let fixture: ComponentFixture<AdmistratorHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmistratorHomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmistratorHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
