import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRepairDetailsComponent } from './user-repair-details.component';

describe('UserRepairDetailsComponent', () => {
  let component: UserRepairDetailsComponent;
  let fixture: ComponentFixture<UserRepairDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRepairDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRepairDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
