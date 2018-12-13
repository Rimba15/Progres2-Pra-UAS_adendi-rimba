/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CupangStartComponent } from './cupang-start.component';

describe('CupangStartComponent', () => {
  let component: CupangStartComponent;
  let fixture: ComponentFixture<CupangStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CupangStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CupangStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
