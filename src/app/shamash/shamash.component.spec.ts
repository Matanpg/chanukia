import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShamashComponent } from './shamash.component';

describe('ShamashComponent', () => {
  let component: ShamashComponent;
  let fixture: ComponentFixture<ShamashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShamashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShamashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
