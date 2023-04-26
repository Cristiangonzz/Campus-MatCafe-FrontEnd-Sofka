import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscribeRouteComponent } from './suscribe-route.component';

describe('SuscribeRouteComponent', () => {
  let component: SuscribeRouteComponent;
  let fixture: ComponentFixture<SuscribeRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuscribeRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuscribeRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
