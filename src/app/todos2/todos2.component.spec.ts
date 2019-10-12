import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Todos2Component } from './todos2.component';

describe('Todos2Component', () => {
  let component: Todos2Component;
  let fixture: ComponentFixture<Todos2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Todos2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Todos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
