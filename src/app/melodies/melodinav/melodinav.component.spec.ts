import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelodinavComponent } from './melodinav.component';

describe('MelodinavComponent', () => {
  let component: MelodinavComponent;
  let fixture: ComponentFixture<MelodinavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MelodinavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MelodinavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
