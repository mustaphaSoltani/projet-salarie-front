import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSalariesComponent } from './list-salaries.component';

describe('ListSalariesComponent', () => {
  let component: ListSalariesComponent;
  let fixture: ComponentFixture<ListSalariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSalariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSalariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
