import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVegetableInofPage } from './add-vegetable-inof.page';

describe('AddVegetableInofPage', () => {
  let component: AddVegetableInofPage;
  let fixture: ComponentFixture<AddVegetableInofPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVegetableInofPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVegetableInofPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
