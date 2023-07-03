import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationFrontComponent } from './presentation-front.component';

describe('PresentationFrontComponent', () => {
  let component: PresentationFrontComponent;
  let fixture: ComponentFixture<PresentationFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
