import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendWorkShopComponent } from './send-work-shop.component';

describe('SendWorkShopComponent', () => {
  let component: SendWorkShopComponent;
  let fixture: ComponentFixture<SendWorkShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendWorkShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendWorkShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
