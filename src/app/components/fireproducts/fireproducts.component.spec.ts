import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireproductsComponent } from './fireproducts.component';

describe('FireproductsComponent', () => {
  let component: FireproductsComponent;
  let fixture: ComponentFixture<FireproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
