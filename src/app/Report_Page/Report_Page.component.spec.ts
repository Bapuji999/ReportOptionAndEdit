/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Report_PageComponent } from './Report_Page.component';

describe('Report_PageComponent', () => {
  let component: Report_PageComponent;
  let fixture: ComponentFixture<Report_PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Report_PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Report_PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
