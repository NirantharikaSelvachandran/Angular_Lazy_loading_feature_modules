import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSettlementComponent } from './add-settlement.component';

describe('AddSettlementComponent', () => {
  let component: AddSettlementComponent;
  let fixture: ComponentFixture<AddSettlementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSettlementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSettlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
