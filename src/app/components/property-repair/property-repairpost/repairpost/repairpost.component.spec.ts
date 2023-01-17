import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairpostComponent } from './repairpost.component';

describe('RepairpostComponent', () => {
  let component: RepairpostComponent;
  let fixture: ComponentFixture<RepairpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepairpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
