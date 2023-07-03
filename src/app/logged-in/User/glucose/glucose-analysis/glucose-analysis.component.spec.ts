import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlucoseAnalysisComponent } from './glucose-analysis.component';

describe('GlucoseAnalysisComponent', () => {
  let component: GlucoseAnalysisComponent;
  let fixture: ComponentFixture<GlucoseAnalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlucoseAnalysisComponent]
    });
    fixture = TestBed.createComponent(GlucoseAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
