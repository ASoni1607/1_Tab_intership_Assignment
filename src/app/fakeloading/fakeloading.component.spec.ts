import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeloadingComponent } from './fakeloading.component';

describe('FakeloadingComponent', () => {
  let component: FakeloadingComponent;
  let fixture: ComponentFixture<FakeloadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeloadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeloadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
