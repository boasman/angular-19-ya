/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormuariloReactivoAndidadosComponent } from './formuarilo-reactivo-andidados.component';

describe('FormuariloReactivoAndidadosComponent', () => {
  let component: FormuariloReactivoAndidadosComponent;
  let fixture: ComponentFixture<FormuariloReactivoAndidadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormuariloReactivoAndidadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormuariloReactivoAndidadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
