import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserrolecreateComponent } from './userrolecreate.component';

describe('UserrolecreateComponent', () => {
  let component: UserrolecreateComponent;
  let fixture: ComponentFixture<UserrolecreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserrolecreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserrolecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
