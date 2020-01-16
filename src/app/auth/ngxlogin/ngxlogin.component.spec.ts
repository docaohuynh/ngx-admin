import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxloginComponent } from './ngxlogin.component';

describe('NgxloginComponent', () => {
  let component: NgxloginComponent;
  let fixture: ComponentFixture<NgxloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
