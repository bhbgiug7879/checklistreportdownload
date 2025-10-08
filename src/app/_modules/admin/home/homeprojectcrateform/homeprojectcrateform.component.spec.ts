import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeprojectcrateformComponent } from './homeprojectcrateform.component';

describe('HomeprojectcrateformComponent', () => {
  let component: HomeprojectcrateformComponent;
  let fixture: ComponentFixture<HomeprojectcrateformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeprojectcrateformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeprojectcrateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
