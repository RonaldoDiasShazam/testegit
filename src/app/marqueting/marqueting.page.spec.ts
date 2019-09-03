import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarquetingPage } from './marqueting.page';

describe('MarquetingPage', () => {
  let component: MarquetingPage;
  let fixture: ComponentFixture<MarquetingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarquetingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarquetingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
