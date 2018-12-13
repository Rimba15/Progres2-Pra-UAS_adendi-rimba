/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CupangItemComponent } from './cupang-item.component';

describe('CupangItemComponent', () => {
  let component: CupangItemComponent;
  let fixture: ComponentFixture<CupangItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CupangItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CupangItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
