import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLearnerByEmailComponent } from './get-learner-by-email.component';

describe('GetLearnerByEmailComponent', () => {
  let component: GetLearnerByEmailComponent;
  let fixture: ComponentFixture<GetLearnerByEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetLearnerByEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetLearnerByEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
