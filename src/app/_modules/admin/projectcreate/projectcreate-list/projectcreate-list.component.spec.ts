import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectcreateListComponent } from './projectcreate-list.component';

describe('ProjectcreateListComponent', () => {
  let component: ProjectcreateListComponent;
  let fixture: ComponentFixture<ProjectcreateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectcreateListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectcreateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
