import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOptionPagePage } from './select-option-page.page';

describe('SelectOptionPagePage', () => {
  let component: SelectOptionPagePage;
  let fixture: ComponentFixture<SelectOptionPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectOptionPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectOptionPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
