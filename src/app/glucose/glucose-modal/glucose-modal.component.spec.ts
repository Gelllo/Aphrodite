import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlucoseModalComponent } from './glucose-modal.component';

describe('GlucoseModalComponent', () => {
  let component: GlucoseModalComponent;
  let fixture: ComponentFixture<GlucoseModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlucoseModalComponent]
    });
    fixture = TestBed.createComponent(GlucoseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
