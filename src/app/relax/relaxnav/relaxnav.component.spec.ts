import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelaxnavComponent } from './relaxnav.component';

describe('RelaxnavComponent', () => {
  let component: RelaxnavComponent;
  let fixture: ComponentFixture<RelaxnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelaxnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelaxnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
