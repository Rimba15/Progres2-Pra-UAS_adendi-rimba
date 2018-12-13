/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CupangEditComponent } from './cupang-edit.component';

describe('CupangEditComponent', () => {
  let component: CupangEditComponent;
  let fixture: ComponentFixture<CupangEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CupangEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CupangEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
