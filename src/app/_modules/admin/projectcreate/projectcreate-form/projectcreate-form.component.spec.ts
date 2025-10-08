import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectcreateFormComponent } from './projectcreate-form.component';

describe('ProjectcreateFormComponent', () => {
  let component: ProjectcreateFormComponent;
  let fixture: ComponentFixture<ProjectcreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectcreateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectcreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
