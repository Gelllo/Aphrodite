import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodRecordDeleteDialogComponent } from './food-record-delete-dialog.component';

describe('FoodRecordDeleteDialogComponent', () => {
  let component: FoodRecordDeleteDialogComponent;
  let fixture: ComponentFixture<FoodRecordDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodRecordDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodRecordDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
