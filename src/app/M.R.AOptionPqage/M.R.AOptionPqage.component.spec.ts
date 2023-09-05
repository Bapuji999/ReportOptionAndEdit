/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { M.R.AOptionPqageComponent } from './M.R.AOptionPqage.component';

describe('M.R.AOptionPqageComponent', () => {
  let component: M.R.AOptionPqageComponent;
  let fixture: ComponentFixture<M.R.AOptionPqageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M.R.AOptionPqageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M.R.AOptionPqageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
