import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyputComponent } from './propertyput.component';

describe('PropertyputComponent', () => {
  let component: PropertyputComponent;
  let fixture: ComponentFixture<PropertyputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
