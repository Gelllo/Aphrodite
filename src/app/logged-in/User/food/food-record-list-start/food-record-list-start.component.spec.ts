import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodRecordListStartComponent } from './food-record-list-start.component';

describe('FoodRecordListStartComponent', () => {
  let component: FoodRecordListStartComponent;
  let fixture: ComponentFixture<FoodRecordListStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodRecordListStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodRecordListStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
