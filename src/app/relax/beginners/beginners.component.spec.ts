import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginnersComponent } from './beginners.component';

describe('BeginnersComponent', () => {
  let component: BeginnersComponent;
  let fixture: ComponentFixture<BeginnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeginnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeginnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
