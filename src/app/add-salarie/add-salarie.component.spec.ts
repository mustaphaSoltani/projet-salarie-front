import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalarieComponent } from './add-salarie.component';

describe('AddSalarieComponent', () => {
  let component: AddSalarieComponent;
  let fixture: ComponentFixture<AddSalarieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSalarieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSalarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
