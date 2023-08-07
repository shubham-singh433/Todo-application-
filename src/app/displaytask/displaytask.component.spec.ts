import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaytaskComponent } from './displaytask.component';

describe('DisplaytaskComponent', () => {
  let component: DisplaytaskComponent;
  let fixture: ComponentFixture<DisplaytaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplaytaskComponent]
    });
    fixture = TestBed.createComponent(DisplaytaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
