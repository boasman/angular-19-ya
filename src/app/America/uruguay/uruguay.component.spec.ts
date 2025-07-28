/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UruguayComponent } from './uruguay.component';

describe('UruguayComponent', () => {
  let component: UruguayComponent;
  let fixture: ComponentFixture<UruguayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UruguayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UruguayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
