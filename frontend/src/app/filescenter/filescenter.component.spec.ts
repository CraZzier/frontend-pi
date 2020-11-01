import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilescenterComponent } from './filescenter.component';

describe('FilescenterComponent', () => {
  let component: FilescenterComponent;
  let fixture: ComponentFixture<FilescenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilescenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilescenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
