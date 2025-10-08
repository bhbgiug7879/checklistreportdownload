import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeprojectcratelistComponent } from './homeprojectcratelist.component';

describe('HomeprojectcratelistComponent', () => {
  let component: HomeprojectcratelistComponent;
  let fixture: ComponentFixture<HomeprojectcratelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeprojectcratelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeprojectcratelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
