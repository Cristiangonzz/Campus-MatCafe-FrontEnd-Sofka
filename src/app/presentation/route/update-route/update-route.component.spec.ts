import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRouteComponent } from './update-route.component';

describe('UpdateRouteComponent', () => {
  let component: UpdateRouteComponent;
  let fixture: ComponentFixture<UpdateRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
