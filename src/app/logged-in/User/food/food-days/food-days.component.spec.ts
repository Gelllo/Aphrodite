import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDaysComponent } from './food-days.component';

describe('FoodDaysComponent', () => {
  let component: FoodDaysComponent;
  let fixture: ComponentFixture<FoodDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodDaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
