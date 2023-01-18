import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPropertyDetailsComponent } from './user-property-details.component';

describe('UserPropertyDetailsComponent', () => {
  let component: UserPropertyDetailsComponent;
  let fixture: ComponentFixture<UserPropertyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPropertyDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPropertyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
