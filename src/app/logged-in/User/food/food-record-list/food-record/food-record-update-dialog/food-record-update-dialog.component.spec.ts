import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodRecordUpdateDialogComponent } from './food-record-update-dialog.component';

describe('FoodRecordUpdateDialogComponent', () => {
  let component: FoodRecordUpdateDialogComponent;
  let fixture: ComponentFixture<FoodRecordUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodRecordUpdateDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodRecordUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
