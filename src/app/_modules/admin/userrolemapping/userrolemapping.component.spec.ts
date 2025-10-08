import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserrolemappingComponent } from './userrolemapping.component';

describe('UserrolemappingComponent', () => {
  let component: UserrolemappingComponent;
  let fixture: ComponentFixture<UserrolemappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserrolemappingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserrolemappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
