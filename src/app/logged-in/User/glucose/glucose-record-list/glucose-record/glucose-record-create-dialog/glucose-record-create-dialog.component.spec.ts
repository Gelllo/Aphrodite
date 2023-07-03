import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlucoseRecordCreateDialogComponent } from './glucose-record-create-dialog.component';

describe('GlucoseRecordCreateDialogComponent', () => {
  let component: GlucoseRecordCreateDialogComponent;
  let fixture: ComponentFixture<GlucoseRecordCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlucoseRecordCreateDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlucoseRecordCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
