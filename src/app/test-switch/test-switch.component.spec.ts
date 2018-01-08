import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSwitchComponent } from './test-switch.component';

describe('TestSwitchComponent', () => {
  let component: TestSwitchComponent;
  let fixture: ComponentFixture<TestSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
