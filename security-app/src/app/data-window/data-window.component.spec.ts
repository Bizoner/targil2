import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataWindowComponent } from './data-window.component';

describe('DataWindowComponent', () => {
  let component: DataWindowComponent;
  let fixture: ComponentFixture<DataWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
