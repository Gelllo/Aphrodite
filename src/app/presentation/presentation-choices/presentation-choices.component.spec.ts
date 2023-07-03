import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationChoicesComponent } from './presentation-choices.component';

describe('PresentationChoicesComponent', () => {
  let component: PresentationChoicesComponent;
  let fixture: ComponentFixture<PresentationChoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationChoicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
