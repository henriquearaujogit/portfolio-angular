/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodoHomeComponent } from './todo-home.component';

describe('TodoHomeComponent', () => {
  let component: TodoHomeComponent;
  let fixture: ComponentFixture<TodoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
