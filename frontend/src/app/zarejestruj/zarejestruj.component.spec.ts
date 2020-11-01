import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZarejestrujComponent } from './zarejestruj.component';

describe('ZarejestrujComponent', () => {
  let component: ZarejestrujComponent;
  let fixture: ComponentFixture<ZarejestrujComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZarejestrujComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZarejestrujComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
