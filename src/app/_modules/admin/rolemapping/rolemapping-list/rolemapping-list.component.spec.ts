import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolemappingListComponent } from './rolemapping-list.component';

describe('RolemappingListComponent', () => {
  let component: RolemappingListComponent;
  let fixture: ComponentFixture<RolemappingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolemappingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolemappingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
