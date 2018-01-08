import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestIfComponent } from './test-if.component';

describe('TestIfComponent', () => {
  let component: TestIfComponent;
  let fixture: ComponentFixture<TestIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
