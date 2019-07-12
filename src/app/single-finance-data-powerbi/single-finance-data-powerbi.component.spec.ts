import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFinanceDataPowerbiComponent } from './single-finance-data-powerbi.component';

describe('SingleFinanceDataPowerbiComponent', () => {
  let component: SingleFinanceDataPowerbiComponent;
  let fixture: ComponentFixture<SingleFinanceDataPowerbiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleFinanceDataPowerbiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFinanceDataPowerbiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
