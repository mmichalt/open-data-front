import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFinanceDataComponent } from './single-finance-data.component';

describe('SingleFinanceDataComponent', () => {
  let component: SingleFinanceDataComponent;
  let fixture: ComponentFixture<SingleFinanceDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleFinanceDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFinanceDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
