import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgProtectExpandComponent } from './cg-protect-expand.component';

describe('CgProtectExpandComponent', () => {
  let component: CgProtectExpandComponent;
  let fixture: ComponentFixture<CgProtectExpandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CgProtectExpandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CgProtectExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
