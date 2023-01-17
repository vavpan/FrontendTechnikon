import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairputComponent } from './repairput.component';

describe('RepairputComponent', () => {
  let component: RepairputComponent;
  let fixture: ComponentFixture<RepairputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepairputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
