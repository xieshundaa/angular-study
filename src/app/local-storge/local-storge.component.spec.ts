import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalStorgeComponent } from './local-storge.component';

describe('LocalStorgeComponent', () => {
  let component: LocalStorgeComponent;
  let fixture: ComponentFixture<LocalStorgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalStorgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalStorgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
