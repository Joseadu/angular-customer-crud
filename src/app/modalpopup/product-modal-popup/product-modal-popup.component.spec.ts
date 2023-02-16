import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductModalPopupComponent } from './product-modal-popup.component';

describe('ProductModalPopupComponent', () => {
  let component: ProductModalPopupComponent;
  let fixture: ComponentFixture<ProductModalPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductModalPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductModalPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
