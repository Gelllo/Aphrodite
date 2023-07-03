import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlucoseRecordUpdateDialogComponent } from './glucose-record-update-dialog.component';

describe('GlucoseRecordUpdateDialogComponent', () => {
  let component: GlucoseRecordUpdateDialogComponent;
  let fixture: ComponentFixture<GlucoseRecordUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlucoseRecordUpdateDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlucoseRecordUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
