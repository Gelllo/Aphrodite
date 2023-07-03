import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlucoseRecordListComponent } from './glucose-record-list.component';

describe('GlucoseRecordListComponent', () => {
  let component: GlucoseRecordListComponent;
  let fixture: ComponentFixture<GlucoseRecordListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlucoseRecordListComponent]
    });
    fixture = TestBed.createComponent(GlucoseRecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
