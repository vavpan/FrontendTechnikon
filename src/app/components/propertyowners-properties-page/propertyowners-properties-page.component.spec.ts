import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyownersPropertiesPageComponent } from './propertyowners-properties-page.component';

describe('PropertyownersPropertiesPageComponent', () => {
  let component: PropertyownersPropertiesPageComponent;
  let fixture: ComponentFixture<PropertyownersPropertiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyownersPropertiesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyownersPropertiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
