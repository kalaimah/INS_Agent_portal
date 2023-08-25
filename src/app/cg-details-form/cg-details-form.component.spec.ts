import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgDetailsFormComponent } from './cg-details-form.component';

describe('CgDetailsFormComponent', () => {
  let component: CgDetailsFormComponent;
  let fixture: ComponentFixture<CgDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CgDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CgDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
