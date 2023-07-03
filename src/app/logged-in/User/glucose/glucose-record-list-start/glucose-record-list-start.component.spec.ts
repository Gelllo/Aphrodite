import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlucoseRecordListStartComponent } from './glucose-record-list-start.component';

describe('GlucoseRecordListStartComponent', () => {
  let component: GlucoseRecordListStartComponent;
  let fixture: ComponentFixture<GlucoseRecordListStartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlucoseRecordListStartComponent]
    });
    fixture = TestBed.createComponent(GlucoseRecordListStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
