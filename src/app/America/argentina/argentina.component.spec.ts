/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArgentinaComponent } from './argentina.component';

describe('ArgentinaComponent', () => {
  let component: ArgentinaComponent;
  let fixture: ComponentFixture<ArgentinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArgentinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArgentinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
