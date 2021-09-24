import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoligmappaAuthWrapperComponent } from './boligmappa-auth-wrapper.component';

describe('BoligmappaAuthWrapperComponent', () => {
  let component: BoligmappaAuthWrapperComponent;
  let fixture: ComponentFixture<BoligmappaAuthWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoligmappaAuthWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoligmappaAuthWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
