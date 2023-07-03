import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationFooterComponent } from './presentation-footer.component';

describe('PresentationFooterComponent', () => {
  let component: PresentationFooterComponent;
  let fixture: ComponentFixture<PresentationFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
