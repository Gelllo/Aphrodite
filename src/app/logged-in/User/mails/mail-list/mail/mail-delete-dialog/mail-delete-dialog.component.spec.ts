import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailDeleteDialogComponent } from './mail-delete-dialog.component';

describe('MailDeleteDialogComponent', () => {
  let component: MailDeleteDialogComponent;
  let fixture: ComponentFixture<MailDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
