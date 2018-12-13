import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CupangComponent } from './cupang.component';

describe('CupangComponent', () => {
  let component: CupangComponent;
  let fixture: ComponentFixture<CupangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CupangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CupangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
