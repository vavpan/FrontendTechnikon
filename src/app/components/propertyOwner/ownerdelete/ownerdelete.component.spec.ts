import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerdeleteComponent } from './ownerdelete.component';

describe('OwnerdeleteComponent', () => {
  let component: OwnerdeleteComponent;
  let fixture: ComponentFixture<OwnerdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerdeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
