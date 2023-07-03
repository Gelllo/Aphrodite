import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationHeaderComponent } from './presentation-header.component';

describe('PresentationHeaderComponent', () => {
  let component: PresentationHeaderComponent;
  let fixture: ComponentFixture<PresentationHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
