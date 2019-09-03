import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VestuarioPage } from './vestuario.page';

describe('VestuarioPage', () => {
  let component: VestuarioPage;
  let fixture: ComponentFixture<VestuarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VestuarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VestuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
