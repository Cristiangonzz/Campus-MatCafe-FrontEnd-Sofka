import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRouteComponent } from './get-route.component';

describe('GetRouteComponent', () => {
  let component: GetRouteComponent;
  let fixture: ComponentFixture<GetRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
