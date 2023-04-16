import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTooltifyComponent } from './ngx-tooltify.component';

describe('NgxTooltifyComponent', () => {
  let component: NgxTooltifyComponent;
  let fixture: ComponentFixture<NgxTooltifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxTooltifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxTooltifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
