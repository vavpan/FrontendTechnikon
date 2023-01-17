import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertypostComponent } from './propertypost.component';

describe('PropertypostComponent', () => {
  let component: PropertypostComponent;
  let fixture: ComponentFixture<PropertypostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertypostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertypostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
