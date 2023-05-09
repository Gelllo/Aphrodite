import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlucoseRecordComponent } from './glucose-record.component';

describe('GlucoseRecordComponent', () => {
  let component: GlucoseRecordComponent;
  let fixture: ComponentFixture<GlucoseRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlucoseRecordComponent]
    });
    fixture = TestBed.createComponent(GlucoseRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
