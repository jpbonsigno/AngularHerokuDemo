import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeDivComponent } from './mensaje-div.component';

describe('MensajeDivComponent', () => {
  let component: MensajeDivComponent;
  let fixture: ComponentFixture<MensajeDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajeDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajeDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
