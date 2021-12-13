import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipieViewComponent } from './recipie-view.component';

describe('RecipieViewComponent', () => {
  let component: RecipieViewComponent;
  let fixture: ComponentFixture<RecipieViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipieViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipieViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
