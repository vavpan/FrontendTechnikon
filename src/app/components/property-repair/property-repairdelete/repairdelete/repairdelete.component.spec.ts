import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairdeleteComponent } from './repairdelete.component';

describe('RepairdeleteComponent', () => {
  let component: RepairdeleteComponent;
  let fixture: ComponentFixture<RepairdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairdeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepairdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
