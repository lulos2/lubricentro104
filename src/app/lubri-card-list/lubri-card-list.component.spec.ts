import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LubriCardListComponent } from './lubri-card-list.component';

describe('LubriCardListComponent', () => {
  let component: LubriCardListComponent;
  let fixture: ComponentFixture<LubriCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LubriCardListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LubriCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
