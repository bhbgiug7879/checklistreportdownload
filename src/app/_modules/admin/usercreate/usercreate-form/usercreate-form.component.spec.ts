import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercreateFormComponent } from './usercreate-form.component';

describe('UsercreateFormComponent', () => {
  let component: UsercreateFormComponent;
  let fixture: ComponentFixture<UsercreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsercreateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
