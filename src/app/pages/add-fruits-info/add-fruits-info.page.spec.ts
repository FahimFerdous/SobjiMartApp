import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFruitsInfoPage } from './add-fruits-info.page';

describe('AddFruitsInfoPage', () => {
  let component: AddFruitsInfoPage;
  let fixture: ComponentFixture<AddFruitsInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFruitsInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFruitsInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
