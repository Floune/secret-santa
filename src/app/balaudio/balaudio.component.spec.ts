import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalaudioComponent } from './balaudio.component';

describe('BalaudioComponent', () => {
  let component: BalaudioComponent;
  let fixture: ComponentFixture<BalaudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalaudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalaudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
