import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableListPage } from './vegetable-list.page';

describe('VegetableListPage', () => {
  let component: VegetableListPage;
  let fixture: ComponentFixture<VegetableListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetableListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetableListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
