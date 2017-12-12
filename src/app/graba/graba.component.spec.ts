import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrabaComponent } from './graba.component';

describe('GrabaComponent', () => {
  let component: GrabaComponent;
  let fixture: ComponentFixture<GrabaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrabaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrabaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
