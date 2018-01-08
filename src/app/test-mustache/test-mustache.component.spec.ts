import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMustacheComponent } from './test-mustache.component';

describe('TestMustacheComponent', () => {
  let component: TestMustacheComponent;
  let fixture: ComponentFixture<TestMustacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMustacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMustacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
