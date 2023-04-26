import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllRouteComponent } from './get-all-route.component';

describe('GetAllRouteComponent', () => {
  let component: GetAllRouteComponent;
  let fixture: ComponentFixture<GetAllRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
