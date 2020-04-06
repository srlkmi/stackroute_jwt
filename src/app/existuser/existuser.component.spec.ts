import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistuserComponent } from './existuser.component';

describe('ExistuserComponent', () => {
  let component: ExistuserComponent;
  let fixture: ComponentFixture<ExistuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
