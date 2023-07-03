import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailCreateDialogComponent } from './mail-create-dialog.component';

describe('MailCreateDialogComponent', () => {
  let component: MailCreateDialogComponent;
  let fixture: ComponentFixture<MailCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailCreateDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
