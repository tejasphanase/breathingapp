import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BegineersComponent } from './begineers.component';

describe('BegineersComponent', () => {
  let component: BegineersComponent;
  let fixture: ComponentFixture<BegineersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BegineersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BegineersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
