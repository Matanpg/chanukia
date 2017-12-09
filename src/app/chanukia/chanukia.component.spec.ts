import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanukiaComponent } from './chanukia.component';

describe('ChanukiaComponent', () => {
  let component: ChanukiaComponent;
  let fixture: ComponentFixture<ChanukiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChanukiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChanukiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
