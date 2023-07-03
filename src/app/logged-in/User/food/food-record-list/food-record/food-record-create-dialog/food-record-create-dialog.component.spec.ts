import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodRecordCreateDialogComponent } from './food-record-create-dialog.component';

describe('FoodRecordCreateDialogComponent', () => {
  let component: FoodRecordCreateDialogComponent;
  let fixture: ComponentFixture<FoodRecordCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodRecordCreateDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodRecordCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
