import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormQuickComponent } from './form-quick.component';

describe('FormQuickComponent', () => {
  let component: FormQuickComponent;
  let fixture: ComponentFixture<FormQuickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormQuickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormQuickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
