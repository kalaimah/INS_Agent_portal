import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectFormOneComponent } from './protect-form-one.component';

describe('ProtectFormOneComponent', () => {
  let component: ProtectFormOneComponent;
  let fixture: ComponentFixture<ProtectFormOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtectFormOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtectFormOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
