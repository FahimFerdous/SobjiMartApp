import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveUserPage } from './approve-user.page';

describe('ApproveUserPage', () => {
  let component: ApproveUserPage;
  let fixture: ComponentFixture<ApproveUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveUserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
