import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlucoseDaysComponent } from './glucose-days.component';

describe('GlucoseDaysComponent', () => {
  let component: GlucoseDaysComponent;
  let fixture: ComponentFixture<GlucoseDaysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlucoseDaysComponent]
    });
    fixture = TestBed.createComponent(GlucoseDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
