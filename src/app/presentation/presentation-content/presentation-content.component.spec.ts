import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationContentComponent } from './presentation-content.component';

describe('PresentationContentComponent', () => {
  let component: PresentationContentComponent;
  let fixture: ComponentFixture<PresentationContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
