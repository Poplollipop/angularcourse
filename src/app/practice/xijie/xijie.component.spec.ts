import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XijieComponent } from './xijie.component';

describe('XijieComponent', () => {
  let component: XijieComponent;
  let fixture: ComponentFixture<XijieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XijieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XijieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
