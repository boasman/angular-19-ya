/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChileComponent } from './chile.component';

describe('ChileComponent', () => {
  let component: ChileComponent;
  let fixture: ComponentFixture<ChileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
