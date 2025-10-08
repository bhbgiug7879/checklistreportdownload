import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolemappingcreateFormComponent } from './rolemappingcreate-form.component';

describe('RolemappingcreateFormComponent', () => {
  let component: RolemappingcreateFormComponent;
  let fixture: ComponentFixture<RolemappingcreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolemappingcreateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolemappingcreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
