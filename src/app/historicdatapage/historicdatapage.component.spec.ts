import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricdatapageComponent } from './historicdatapage.component';

describe('HistoricdatapageComponent', () => {
  let component: HistoricdatapageComponent;
  let fixture: ComponentFixture<HistoricdatapageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricdatapageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricdatapageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
