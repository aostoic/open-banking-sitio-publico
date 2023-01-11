/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WouldYouLikeToStartComponentComponent } from './would-you-like-to-start-component.component';

describe('WouldYouLikeToStartComponentComponent', () => {
  let component: WouldYouLikeToStartComponentComponent;
  let fixture: ComponentFixture<WouldYouLikeToStartComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WouldYouLikeToStartComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WouldYouLikeToStartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
