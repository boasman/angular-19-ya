/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RutasDefinicionComponent } from './Rutas-Definicion.component';

describe('RutasDefinicionComponent', () => {
  let component: RutasDefinicionComponent;
  let fixture: ComponentFixture<RutasDefinicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutasDefinicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutasDefinicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
