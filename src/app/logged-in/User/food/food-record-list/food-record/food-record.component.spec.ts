import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodRecordComponent } from './food-record.component';

describe('FoodRecordComponent', () => {
  let component: FoodRecordComponent;
  let fixture: ComponentFixture<FoodRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
