import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LubriSearchComponent } from './lubri-search.component';

describe('LubriSearchComponent', () => {
  let component: LubriSearchComponent;
  let fixture: ComponentFixture<LubriSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LubriSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LubriSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
