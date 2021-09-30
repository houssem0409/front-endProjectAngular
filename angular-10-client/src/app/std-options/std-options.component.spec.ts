import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdOptionsComponent } from './std-options.component';

describe('StdOptionsComponent', () => {
  let component: StdOptionsComponent;
  let fixture: ComponentFixture<StdOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
