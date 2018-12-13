/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CupangListComponent } from './cupang-list.component';

describe('CupangListComponent', () => {
  let component: CupangListComponent;
  let fixture: ComponentFixture<CupangListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CupangListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CupangListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
