import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailUpdateDialogComponent } from './mail-update-dialog.component';

describe('MailUpdateDialogComponent', () => {
  let component: MailUpdateDialogComponent;
  let fixture: ComponentFixture<MailUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailUpdateDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
