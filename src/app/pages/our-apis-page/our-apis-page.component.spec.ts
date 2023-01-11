/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OurApisPageComponent } from './our-apis-page.component';

describe('OurApisPageComponent', () => {
  let component: OurApisPageComponent;
  let fixture: ComponentFixture<OurApisPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurApisPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurApisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
