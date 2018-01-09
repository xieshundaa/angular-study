import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAnimateComponent } from './test-animate.component';

describe('TestAnimateComponent', () => {
  let component: TestAnimateComponent;
  let fixture: ComponentFixture<TestAnimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAnimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAnimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
