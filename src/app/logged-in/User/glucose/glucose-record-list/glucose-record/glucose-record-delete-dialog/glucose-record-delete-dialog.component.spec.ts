import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlucoseRecordDeleteDialogComponent } from './glucose-record-delete-dialog.component';

describe('GlucoseRecordDeleteDialogComponent', () => {
  let component: GlucoseRecordDeleteDialogComponent;
  let fixture: ComponentFixture<GlucoseRecordDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlucoseRecordDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlucoseRecordDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
