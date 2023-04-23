import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAdminByEmailComponent } from './get-admin-by-email.component';

describe('GetAdminByEmailComponent', () => {
  let component: GetAdminByEmailComponent;
  let fixture: ComponentFixture<GetAdminByEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAdminByEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAdminByEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
