import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatermenuComponent } from './latermenu.component';

describe('LatermenuComponent', () => {
  let component: LatermenuComponent;
  let fixture: ComponentFixture<LatermenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatermenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
