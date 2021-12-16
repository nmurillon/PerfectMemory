import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToTestComponent } from './to-test.component';

describe('ToTestComponent', () => {
  let component: ToTestComponent;
  let fixture: ComponentFixture<ToTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
