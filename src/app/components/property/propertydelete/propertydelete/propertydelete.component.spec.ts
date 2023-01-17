import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertydeleteComponent } from './propertydelete.component';

describe('PropertydeleteComponent', () => {
  let component: PropertydeleteComponent;
  let fixture: ComponentFixture<PropertydeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertydeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertydeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
