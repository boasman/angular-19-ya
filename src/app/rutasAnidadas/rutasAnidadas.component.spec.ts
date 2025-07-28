/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RutasAnidadasComponent } from './rutasAnidadas.component';

describe('RutasAnidadasComponent', () => {
  let component: RutasAnidadasComponent;
  let fixture: ComponentFixture<RutasAnidadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutasAnidadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutasAnidadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
