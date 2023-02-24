import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductModalPopupComponent } from './create-product-modal-popup.component';

describe('CreateProductModalPopupComponent', () => {
  let component: CreateProductModalPopupComponent;
  let fixture: ComponentFixture<CreateProductModalPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProductModalPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProductModalPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
